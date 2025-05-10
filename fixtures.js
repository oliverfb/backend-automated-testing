const knex = require('knex');
const { assert } = require('chai');
const knexConfig = require('./knexfile');
require('dotenv').config();

exports.mochaGlobalSetup = async () => {
  console.log(`Global setup`);
  global.assert = assert;

  // Run migrations
  await knex(knexConfig.test).migrate.latest();
};

exports.mochaGlobalTeardown = async () => {
  console.log(`Global teardown`);

  // // Rollback all migrations
  await knex(knexConfig.test).migrate.rollback(true);
  await knex.destroy();
};