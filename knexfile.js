// Requires env due to pre-processing logic prior to export
require("dotenv").config();


let connectionConfig = {};

if (process.env.DEV_DB_URL) {
    connectionConfig = {
        connection: process.env.DEV_DB_URL,
    };
} else {
    connectionConfig = {
        connection: {
            host: process.env.DEV_DB_HOST,
            user: process.env.DEV_DB_USER,
            password: process.env.DEV_DB_PASS,
            database: process.env.DEV_DB,
            ssl: false,
        },
    };
}

module.exports = {
    development: {
        client: "pg",
        ...connectionConfig,
        rejectUnauthorized: process.env.NODE_TLS_REJECT_UNAUTH,
        migrations: {
            directory: "./api/src/database/data/migrations",
        },
        seeds: {
            directory: "./api/src/database/data/seeds",
        },
    },
    staging: {
        client: "pg",
        connection: process.env.STAGING_DB_URL,
        // rejectUnauthorized needs to be changed to true in production
        rejectUnauthorized: true,
        migrations: {
            directory: "./api/src/database/data/migrations",
        },
        seeds: {
            directory: "./api/src/database/data/seeds",
        },
    },
    test: {
        client: "pg",
        connection: process.env.TESTING_DB_URL,
        rejectUnauthorized: process.env.NODE_TLS_REJECT_UNAUTH,
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
