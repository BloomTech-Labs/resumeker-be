exports.up = (knex) =>
    knex.schema.createTable("languages", (table) => {
        table.increments("id").notNull();
        table.text("language");
    });

exports.down = (knex) => knex.schema.dropTableIfExists("languages");
