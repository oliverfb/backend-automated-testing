const knex = require('../knex');

async function getUser(id) {
  const user = await knex.select('*').from('users').where({ id }).first(); // select * from users where id = $id;
  return user;
};

async function createUser(user) {
  const newUser = await knex('users').insert(user);
  return newUser;
};

module.exports = {
  getUser,
  createUser
}
