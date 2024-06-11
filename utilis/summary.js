exports.summarizeConversation = (conversation) => {
    const summary = conversation.messages.map(msg => msg.content).join(' ');
    return summary.length > 100 ? summary.substring(0, 100) + '...' : summary;
  };
  