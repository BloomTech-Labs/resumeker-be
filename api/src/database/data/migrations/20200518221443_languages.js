exports.up = (knex) =>
    knex.schema.table("languages", (table) => {
        table.increments("id").notNull();
        table.text("language");
    });

exports.down = (knex) => knex.schema.dropTableIfExists("languages");
