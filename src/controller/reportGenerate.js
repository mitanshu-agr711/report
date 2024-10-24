

import { Lead } from '../models/report.model.js'; 

export const generateReport = async (req, res) => {
  try {
    const leads = await Lead.find(); 
    const transformedLeads = leads.map(lead => ({
      ...lead._doc,
      name: lead.name.toUpperCase(), 
    }));
    res.json(transformedLeads); 
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
};