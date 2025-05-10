/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
