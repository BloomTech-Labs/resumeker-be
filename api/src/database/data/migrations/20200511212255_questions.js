exports.up = function migrateUp(knex) {
    return knex.schema.createTable("questions", (table) => {
        table.increments("id").notNullable();
        table.text("question").notNullable();
        table.text("title").notNullable();
        table
            .integer("roleId")
            .notNullable()
            .references("id")
            .inTable("roles")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("questions");
};
