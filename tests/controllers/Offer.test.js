const request = require('supertest');

describe('offer controller tests', () => {
  it('should not list offers', async () => {
    const response = await request(global.server).get('/offers');

    expect(response.status).toEqual(401);
  });
  it('should list offers', async () => {
    const response = await request(global.server).get('/offers').set('Authorization', `Bearer ${global.auth}`);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('total');
    expect(response.body).toHaveProperty('offers');
  });
  it('should fires an error', async () => {
    const response = await request(global.server).get('/offers?name=""').set('Authorization', `Bearer ${global.auth}`);

    expect(response.status).toEqual(500);
  });
});
