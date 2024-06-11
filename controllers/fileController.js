const fileService = require('../services/fileService');

exports.uploadFile = async (req, res) => {
  try {
    const response = await fileService.uploadFile(req.file);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listFiles = async (req, res) => {
  try {
    const files = await fileService.listFiles();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const response = await fileService.deleteFile(req.params.filename);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
