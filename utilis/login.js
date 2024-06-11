const fs = require('fs');
const path = require('path');

const logDir = 'logs/';
const logFile = path.join(logDir, 'app.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

exports.log = (message) => {
  fs.appendFile(logFile, `${new Date().toISOString()} - ${message}\n`, (err) => {
    if (err) console.error('Error logging message:', err);
  });
};
