exports.up = (knex) =>
    knex.schema.table("users", (table) => {
        table.dropColumn("firstName");
        table.dropColumn("lastName");
        table.dropColumn("email");
    });

exports.down = (knex) =>
    knex.schema.table("users", (table) => {
        table.text("email").notNullable();
        table.text("firstName").notNullable();
        table.text("lastName").notNullable();
    });
