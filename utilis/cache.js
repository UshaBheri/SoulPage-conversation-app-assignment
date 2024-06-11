const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

exports.set = (key, value) => {
  cache.set(key, value);
};

exports.get = (key) => {
  return cache.get(key);
};

exports.has = (key) => {
  return cache.has(key);
};
