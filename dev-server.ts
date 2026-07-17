import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// CRM Token
const CRM_TOKEN = process.env.CRM_TOKEN || '';
const CRM_URL = process.env.CRM_URL || 'https://api.myinvesttrade.com/api/lead_management/api/affiliates';

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

import authRouter from './api/auth.js';
import contactRouter from './api/contact.js';

app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.listen(port, () => {
  console.log(`Backend API Server running at http://localhost:${port}`);
});
