const request = require('supertest');
const app = require('../app');

describe('POST /api/rag/generate', () => {
  it('should generate a response for a given query', async () => {
    const res = await request(app)
      .post('/api/rag/generate')
      .send({ query: 'What is the capital of France?' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
  });
});
