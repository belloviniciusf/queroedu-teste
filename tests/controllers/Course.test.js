const request = require('supertest');

describe('course controller tests', () => {
  it('should not list courses', async () => {
    const response = await request(global.server).get('/courses');

    expect(response.status).toEqual(401);
  });
  it('should list courses', async () => {
    const response = await request(global.server).get('/courses').set('Authorization', `Bearer ${global.auth}`);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('count');
    expect(response.body).toHaveProperty('courses');
  });
  it('should fires an error', async () => {
    const response = await request(global.server).get('/courses?name=""').set('Authorization', `Bearer ${global.auth}`);

    expect(response.status).toEqual(500);
  });
});
