const express = require('express');
const conversationController = require('../controllers/conversationController');
const router = express.Router();

router.get('/summaries', conversationController.getSummaries);

module.exports = router;
