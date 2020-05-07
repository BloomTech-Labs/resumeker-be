exports.up = function (knex) {
    return knex.schema.createTable("workHistory", (table) => {
        table.increments("id").notNullable();
        table.text("startDate").notNullable().unique();
        table.text("endDate").notNullable();
        table.text("title").notNullable();
        table.text("description").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("workHistory");
};
