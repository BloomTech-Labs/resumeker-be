exports.up = function migrateUp(knex) {
    return knex.schema.createTable("projects", (table) => {
        table.increments("id").notNullable();
        table.text("startDate").notNullable();
        table.text("endDate").notNullable();
        table.text("role").notNullable();
        table.text("roleDescription").notNullable();
        table.text("title").notNullable();
        table.text("projectUrl").notNullable();
        table.text("description").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("projects");
};
