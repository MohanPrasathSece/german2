import express from 'express';
import { put, head } from '@vercel/blob';

const router = express.Router();

const CRM_URL = process.env.CRM_URL || 'https://api.myinvesttrade.com/api/lead_management/api/affiliates';
const CRM_TOKEN = process.env.CRM_TOKEN || '';

const sendDashboardIncrement = async (type: string, name: string, email: string) => {
  try {
    const payload = {
      website: 'AivestGlobal',
      type,
      name,
      email
    };
    console.log(`[Dashboard] Sending increment:`, payload);
    const res = await fetch('https://lead-dashboard-orcin.vercel.app/api/increment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log(`[Dashboard] Response status:`, res.status);
  } catch (err) {
    console.error(`[Dashboard] Error:`, err);
  }
};

router.post('/signup', async (req, res) => {
  const { name, email, phone, country } = req.body;
  console.log(`[Auth Signup] Request received for email: ${email}`);

  // 1. Submit to CRM
  try {
    // We expect phone to be formatted with '00' for CRM
    const [firstName, ...lastNames] = (name || '').split(' ');
    const lastName = lastNames.join(' ');

    const crmPayload = {
      country_name: country || 'ch',
      description: '',
      phone: phone, // Expecting 00 format from frontend
      email: email,
      first_name: firstName || '',
      last_name: lastName || '',
      custom_fields: {
        Source_ID: 'Website',
        Outline_Your_Case: ''
      }
    };

    console.log(`[Auth Signup] CRM Payload:`, crmPayload);

    // Bypassing SSL for CRM
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const crmResponse = await fetch(CRM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Token': CRM_TOKEN,
        'Authorization': `Bearer ${CRM_TOKEN}`,
        'X-Affiliate-Token': CRM_TOKEN,
        'x-token': CRM_TOKEN
      },
      body: JSON.stringify(crmPayload)
    });

    const crmStatus = crmResponse.status;
    const crmText = await crmResponse.text();
    console.log(`[Auth Signup] CRM Status:`, crmStatus);
    console.log(`[Auth Signup] CRM Response:`, crmText);

    let crmData = null;
    try {
      crmData = JSON.parse(crmText);
    } catch (e) {
      // Not JSON
    }

    const isDuplicate = typeof crmData === 'object' && crmData?.duplicate === true;
    const isSuccess = crmStatus >= 200 && crmStatus < 300;
    const alreadyExistsStr = typeof crmData === 'string' && crmData.toLowerCase().includes('already exists');
    const msgLower = (crmData?.message || '').toLowerCase();

    if (!isSuccess && !isDuplicate && !alreadyExistsStr && !msgLower.includes('already exists')) {
      return res.status(400).json({
        success: false,
        message: "We couldn't process your enquiry with the information provided. Please review your details and try again."
      });
    }

    // CRM accepts or account already exists
    // 2. Blob Auth
    // Write user
    await put(`users/${email}.json`, JSON.stringify({ name, email, phone }), { access: 'private', addRandomSuffix: false });
    
    // Create session
    const sessionToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    await put(`sessions/${sessionToken}.json`, JSON.stringify({ email }), { access: 'private', addRandomSuffix: false });

    // 3. Increment dashboard (if not duplicate)
    if (!isDuplicate && !alreadyExistsStr && !msgLower.includes('already exists')) {
      await sendDashboardIncrement('signup', name, email);
    }

    const responseMsg = (isDuplicate || alreadyExistsStr || msgLower.includes('already exists'))
      ? "It looks like you've already contacted us. We've recognized your details and will continue with your request."
      : "Signup successful";

    res.json({
      success: true,
      sessionToken,
      message: responseMsg
    });

  } catch (error) {
    console.error(`[Auth Signup] Unexpected Error:`, error);
    res.status(500).json({ success: false, message: "An unexpected failure occurred. Please try again later." });
  }
});

router.post('/login', async (req, res) => {
  const { email } = req.body;
  console.log(`[Auth Login] Request for email: ${email}`);

  try {
    const userBlobInfo = await head(`users/${email}.json`);
    if (!userBlobInfo) {
      return res.status(404).json({ success: false, message: 'Account not found. Please sign up.' });
    }

    const sessionToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    await put(`sessions/${sessionToken}.json`, JSON.stringify({ email }), { access: 'private', addRandomSuffix: false });

    res.json({ success: true, sessionToken });
  } catch (error: any) {
    if (error.name === 'BlobNotFoundError') {
      return res.status(404).json({ success: false, message: 'Account not found. Please sign up.' });
    }
    console.error(`[Auth Login] Unexpected Error:`, error);
    res.status(500).json({ success: false, message: "An unexpected failure occurred." });
  }
});

export default router;
