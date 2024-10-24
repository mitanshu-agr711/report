import express from 'express';
const reportController = require('../controllers/reportController');
const dummyService = require('../../services/dummyService');

const router = express.Router();

router.get('/leads', async (req, res) => {
  const leads = await dummyService.getLeads();
  res.json(leads);
});

router.get('/campaigns', async (req, res) => {
  const campaigns = await dummyService.getCampaigns();
  res.json(campaigns);
});

router.get('/generate', reportController.generateReport);

export default router;