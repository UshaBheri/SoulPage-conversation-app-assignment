const fs = require('fs');
const path = require('path');

const logAction = (action, details) => {
  fs.appendFile('logs/actions.log', `${new Date().toISOString()} - ${action}: ${JSON.stringify(details)}\n`, (err) => {
    if (err) console.error('Error logging action:', err);
  });
};

const logMiddleware = (req, res, next) => {
  res.on('finish', () => {
    logAction(req.method, { url: req.url, status: res.statusCode, user: req.user });
  });
  next();
};

module.exports = logMiddleware;
