exports.up = function migrateUp(knex) {
    return knex.schema.createTable("users", (table) => {
        table.text("id").notNullable().primary();
        table.text("email").notNullable();
        table.text("userImageURL").notNullable();
        table.text("firstName").notNullable();
        table.text("lastname").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("users");
};
