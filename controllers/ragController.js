const ragService = require('../services/ragService');

exports.generateResponse = async (req, res) => {
  try {
    const response = await ragService.generateResponse(req.body.query);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
