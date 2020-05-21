exports.up = (knex) => knex.schema.dropTableIfExists("users");

exports.down = (knex) =>
    knex.schema.table("users", (table) => {
        table.text("email");
        table.text("firstName");
        table.text("lastName");
    });
