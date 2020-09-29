const request = require('supertest');
const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();
let UserMock;

beforeAll(() => {
  UserMock = dbMock.define('users', {
    fullname: 'John Doe',
    email: 'john@doe.com',
    password: 'queroedu',
  });
});

describe('user controller tests', () => {
  it('should create user', async () => {
    const user = {
      fullname: 'John Doe',
      email: 'john@doe.com',
      password: 'queroedu',
    };
    const userCreated = await UserMock.create(user);

    expect(userCreated).toHaveProperty('id');
  });
  it('should not create user', async () => {
    const existingUser = {
      fullname: 'Vinícius Belló',
      email: 'bello.viniciusf@gmail.com',
      password: 'queroedu',
    };

    const response = await request(global.server).post('/users').send(existingUser);
    expect(response.status).toEqual(400);
  });
});
