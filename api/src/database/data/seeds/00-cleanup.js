const cleaner = require("knex-cleaner");

exports.seed = function knexCleaner(knex) {
    return cleaner.clean(knex, {
        ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    });
};
