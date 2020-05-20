exports.up = function migrateUp(knex) {
    return knex.schema.createTable("hobbies", (table) => {
        table.increments("id").notNullable();
        table.text("name").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("hobbies");
};
