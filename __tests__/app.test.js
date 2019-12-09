const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('should a 404 given a no request', async() => {
    return await request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
});
