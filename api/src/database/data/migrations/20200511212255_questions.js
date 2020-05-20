exports.up = async function migrateUp(knex) {
    await knex.schema.createTable("questions", (table) => {
        table.increments("id").notNullable();
        table.text("question").notNullable();
        table.text("tip");
    });

    await knex.schema.createTable("roles_questions", (table) => {
        table
            .integer("roleID")
            .notNullable()
            .references("id")
            .inTable("roles")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table
            .integer("questionID")
            .notNullable()
            .references("id")
            .inTable("questions")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.primary(["roleID", "questionID"]);
    });
};

exports.down = async function migrateDown(knex) {
    await knex.schema.dropTableIfExists("roles_questions");
    await knex.schema.dropTableIfExists("questions");
};
