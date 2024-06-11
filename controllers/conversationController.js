const conversationService = require('../services/conversationService');

exports.getSummaries = async (req, res) => {
  const { page, limit, participant } = req.query;
  try {
    const summaries = await conversationService.getSummaries(page, limit, participant);
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
