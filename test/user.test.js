const { assert } = require('chai');
const userService = require('../src/services/users');
const request = require('supertest');
// const app = require('../src/index');

// describe('User Route', () => {
//   it('/get', (done) => {
//      request(app)
//        .get('/users/get')
//        .expect(200, done)
//   })
// });

describe('Users Service', () => {
  it('Get User', async () => {
    const user = {
      name: "oliver",
      email: "oliver@intellisys.com.do",
    }

    await userService.createUser(user);

    const result = await userService.getUser(1); // []
    assert.include(result, user);
  });
});

// knex migration
// definir rutas status
// definir servicio status
// definir tests