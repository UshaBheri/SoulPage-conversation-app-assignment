const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  participants: [String],
  messages: [{ sender: String, content: String, timestamp: Date }],
  summary: String, // new field
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
