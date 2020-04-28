const knex = require("knex");
const config = require("../../../../knexfile");

const environment = process.env.NODE_ENV || "dev";

module.exports = knex(config[environment]);
