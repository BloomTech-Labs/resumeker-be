exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").notNullable();
        table.text("email").notNullable().unique();
        table.text("firstName").notNullable();
        table.text("lastName").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
