const express = require('express');
const ragController = require('../controllers/ragController');
const router = express.Router();

router.post('/generate', ragController.generateResponse);

module.exports = router;
