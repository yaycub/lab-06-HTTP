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

  it('should return <h1>red</h1> with GET /red', async() => {
    return await request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

  it('should return <h1>green</h1> with GET /green', async() => {
    return await request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('should return <h1>blue</h1> with GET /blue', async() => {
    return await request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });

  // it('should return Not Found when requesting an empty endpoint', async() => {
  //   return await request(app)
  //     .get('/orange')
  //     .then(res => {
  //       expect(res.text).toEqual('Not Found');
  //     });
  // });
});
