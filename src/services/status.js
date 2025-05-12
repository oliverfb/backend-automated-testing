const knex = require("../knex")


async function createStatus(status) {
  const newStatus = await knex("status").insert(status)
  return newStatus
}


async function getStatus(id) {
  const status = await knex.select("*").from("status").where({id}).first()
  return status
}


module.exports = {
  createStatus,
  getStatus
}