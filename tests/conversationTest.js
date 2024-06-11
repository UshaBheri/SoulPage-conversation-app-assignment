const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/conversations');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/conversations/summaries', () => {
  it('should return conversation summaries', async () => {
    const res = await request(app).get('/api/conversations/summaries?page=1&limit=10');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('summaries');
  });
});
