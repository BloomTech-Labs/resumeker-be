exports.up = function migrateUp(knex) {
    return knex.schema.createTable("roles", (table) => {
        table.increments("id").notNullable().unique();
        table.text("name").notNullable();
        table
            .text("userID")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("roles");
};
