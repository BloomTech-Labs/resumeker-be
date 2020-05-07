// const pg = require("pg");

// pg.defaults.ssl = true;

module.exports = {
    development: {
        client: "pg",
        connection: "postgresql://localhost/resumeker",
        // rejectUnauthorized needs to be changed to true in production
        rejectUnauthorized: false,
        migrations: {
            directory: "./api/src/database/data/migrations",
        },
        seeds: {
            directory: "./api/src/database/data/seeds",
        },
    },
    test: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        // rejectUnauthorized needs to be changed to true in production
        rejectUnauthorized: false,
        migrations: {
            directory: "./api/src/database/data/migrations",
        },
        seeds: {
            directory: "./api/src/database/data/seeds",
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        // rejectUnauthorized needs to be changed to true in production
        rejectUnauthorized: true,
        migrations: {
            directory: "./api/src/database/data/migrations",
        },
        seeds: {
            directory: "./api/src/database/data/seeds",
        },
    },
};
