// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: process.env.TEST_DB_NAME,
      user:     process.env.TEST_DB_USER,
      password: process.env.TEST_DB_PASSWORD,
      port: process.env.TEST_DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
