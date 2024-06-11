const express = require('express');
const fileController = require('../controllers/fileController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/files', fileController.listFiles);
router.delete('/files/:filename', fileController.deleteFile);

module.exports = router;
