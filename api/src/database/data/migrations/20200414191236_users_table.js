exports.up = function migrateUp(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("users");
};
