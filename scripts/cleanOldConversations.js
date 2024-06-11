const Conversation = require('../models/conversation');

const cleanupOldConversations = async () => {
  const dateThreshold = new Date();
  dateThreshold.setMonth(dateThreshold.getMonth() - 6); // Delete conversations older than 6 months

  await Conversation.deleteMany({ 'messages.timestamp': { $lt: dateThreshold } });
  console.log('Old conversations cleaned up');
};

module.exports = cleanupOldConversations;
