import express from 'express';

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

router.post('/', async (req, res) => {
  const { name, email, phone, country, message } = req.body;
  console.log(`[Contact] Request received for email: ${email}`);

  try {
    const [firstName, ...lastNames] = (name || '').split(' ');
    const lastName = lastNames.join(' ');

    const crmPayload = {
      country_name: country || 'ch',
      description: message || '',
      phone: phone, // Expecting 00 format
      email: email,
      first_name: firstName || '',
      last_name: lastName || '',
      custom_fields: {
        Source_ID: 'Website',
        Outline_Your_Case: message || ''
      }
    };

    console.log(`[Contact] CRM Payload:`, crmPayload);

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
    console.log(`[Contact] CRM Status:`, crmStatus);
    console.log(`[Contact] CRM Response:`, crmText);

    let crmData = null;
    try {
      crmData = JSON.parse(crmText);
    } catch (e) {}

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

    if (!isDuplicate && !alreadyExistsStr && !msgLower.includes('already exists')) {
      await sendDashboardIncrement('contact', name, email);
    }

    const responseMsg = (isDuplicate || alreadyExistsStr || msgLower.includes('already exists'))
      ? "It looks like you've already contacted us. We've recognized your details and will continue with your request."
      : "Message sent successfully.";

    res.json({
      success: true,
      message: responseMsg
    });

  } catch (error) {
    console.error(`[Contact] Unexpected Error:`, error);
    res.status(500).json({ success: false, message: "An unexpected failure occurred. Please try again later." });
  }
});

export default router;
