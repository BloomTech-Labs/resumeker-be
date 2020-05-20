exports.up = function migrateUp(knex) {
    return knex.schema.createTable("roles", (table) => {
        table.increments("id").notNullable().unique();
        table.text("name").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("roles");
};
