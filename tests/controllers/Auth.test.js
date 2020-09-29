const request = require('supertest');

describe('auth controller tests', () => {
  it('should log in', async () => {
    const response = await request(global.server)
      .post('/auth/login')
      .send({ email: 'bello.viniciusf@gmail.com', password: 'queroedu' });
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
  });
  it('should not found user', async () => {
    const response = await request(global.server)
      .post('/auth/login')
      .send({ email: 'vinicius@queroedu.com.br', password: 'queroeducacao' });
    expect(response.status).toEqual(404);
  });
  it('should fail log in', async () => {
    const response = await request(global.server)
      .post('/auth/login')
      .send({ email: 'bello.viniciusf@gmail.com', password: 'queroeducacao' });
    expect(response.status).toEqual(401);
  });
});
