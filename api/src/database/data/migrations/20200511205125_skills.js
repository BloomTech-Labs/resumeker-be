exports.up = function migrateUp(knex) {
    return knex.schema.createTable("skills", (table) => {
        table.increments("id").notNullable();
        table.enu("skillType", ["Technical", "Qualitative"]).notNullable();
        table.text("name").notNullable();
        table
            .text("userId")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("skills");
};
