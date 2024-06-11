const fs = require('fs');
const path = require('path');

const uploadDir = 'uploads/';

const fileExists = (filename) => {
  return fs.existsSync(path.join(uploadDir, filename));
};

exports.uploadFile = async (file) => {
  const { originalname, path: tempPath } = file;
  if (fileExists(originalname)) {
    fs.unlinkSync(tempPath);
    throw new Error('File already exists');
  }
  fs.renameSync(tempPath, path.join(uploadDir, originalname));
  return { message: 'File uploaded successfully' };
};

exports.listFiles = async () => {
  const files = fs.readdirSync(uploadDir);
  return files.map(file => ({
    filename: file,
    size: fs.statSync(path.join(uploadDir, file)).size,
    createdAt: fs.statSync(path.join(uploadDir, file)).birthtime
  }));
};

exports.deleteFile = async (filename) => {
  if (!fileExists(filename)) {
    throw new Error('File not found');
  }
  fs.unlinkSync(path.join(uploadDir, filename));
  return { message: 'File deleted successfully' };
};
