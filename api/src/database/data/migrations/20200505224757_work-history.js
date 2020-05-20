exports.up = function migrateUp(knex) {
    return knex.schema.createTable("workHistory", (table) => {
        table.increments("id").notNullable();
        table.text("startDate").notNullable().unique();
        table.text("endDate").notNullable();
        table.text("title").notNullable();
        table.text("description").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("workHistory");
};
