const request = require('supertest');
const app = require('../app');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'testfile.txt');

beforeAll(() => {
  fs.writeFileSync(testFilePath, 'This is a test file');
});

afterAll(() => {
  fs.unlinkSync(testFilePath);
});

describe('POST /api/files/upload', () => {
  it('should upload a file', async () => {
    const res = await request(app)
      .post('/api/files/upload')
      .attach('file', testFilePath);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('File uploaded successfully');
  });

  it('should prevent duplicate file uploads', async () => {
    const res = await request(app)
      .post('/api/files/upload')
      .attach('file', testFilePath);
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe('File already exists');
  });
});
