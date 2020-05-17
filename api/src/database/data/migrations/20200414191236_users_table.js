exports.up = function migrateUp(knex) {
    return knex.schema.createTable("users", (table) => {
        table.text("id").notNullable().primary();
        table.text("email").notNullable();
        table.text("firstName").notNullable();
        table.text("lastName").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("users");
};
