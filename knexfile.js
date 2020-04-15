require("dotenv").config();
const pg = require("pg");

pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    // rejectUnauthorized needs to be changed to true in production
    rejectUnauthorized: false,
    migrations: {
      directory: "./database/data/migrations",
    },
    seeds: {
      directory: "./database/data/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    // rejectUnauthorized needs to be changed to true in production
    rejectUnauthorized: true,
    migrations: {
      directory: "./database/data/migrations",
    },
    seeds: {
      directory: "./database/data/seeds",
    },
  },
};