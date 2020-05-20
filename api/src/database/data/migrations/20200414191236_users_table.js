exports.up = (knex) =>
    knex.schema.createTable("users", (table) => {
        table.text("id").notNullable().primary();
    });

exports.down = (knex) => knex.schema.dropTableIfExists("users");
