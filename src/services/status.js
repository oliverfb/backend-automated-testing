const knex = require('../knex');

async function getStatus(id) {
    const status = await knex.select('*').from('status').where({ id }).first();
    return status;
};

async function createStatus(status) {
  const newStatus = await knex('status').insert(status);
  return newStatus;
};

module.exports = {
  getStatus,
  createStatus
}
