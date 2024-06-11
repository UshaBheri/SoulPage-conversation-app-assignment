const express = require('express');
const mongoose = require('mongoose');
const conversationRoutes = require('./routes/conversationRoutes');
const fileRoutes = require('./routes/fileRoutes');
const ragRoutes = require('./routes/ragRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');
const cron = require('node-cron');
const cleanupOldConversations = require('./scripts/cleanOldConversations');

require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/conversations');

// Routes
app.use('/api/conversations', conversationRoutes);
app.use('/api/files', authMiddleware, fileRoutes);
app.use('/api/rag', authMiddleware, ragRoutes);

// Error handling middleware
app.use(errorHandler);

// Schedule cleanup script
cron.schedule('0 0 * * *', cleanupOldConversations);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
