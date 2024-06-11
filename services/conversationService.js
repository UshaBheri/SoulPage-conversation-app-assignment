const Conversation = require('../models/conversation');
const cache = require('../utilis/cache');

exports.getSummaries = async (page = 1, limit = 10, participant) => {
  const cacheKey = `summaries_${page}_${limit}_${participant || ''}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const filter = participant ? { participants: participant } : {};
  const summaries = await Conversation.find(filter)
    .select('summary')
    .skip((page - 1) * limit)
    .limit(Number(limit));
    
  cache.set(cacheKey, summaries);
  return summaries;
};
