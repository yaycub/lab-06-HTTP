const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('should a return hi given a GET request at /', async() => {
    return await request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>hi</h1>');
      });
  });

  it('should echo what the body of a POST request', async() => {
    return await request(app)
      .post('/echo')
      .send('poop scoot')
      .then(res => {
        expect(res.text).toEqual('poop scoot');
      });
  });
});
