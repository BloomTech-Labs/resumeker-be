exports.up = async (knex) => {
    await knex.schema.alterTable("education", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("workHistory", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("projects", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("hobbies", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("skills", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("roles", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
    await knex.schema.alterTable("languages", (table) => {
        table.integer("draftID");
        table
            .foreign("draftID")
            .references("drafts.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
    await knex.schema.alterTable("education", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("workHistory", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("projects", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("hobbies", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("skills", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("roles", (table) => {
        table.dropColumn("draftID");
    });
    await knex.schema.alterTable("languages", (table) => {
        table.dropColumn("draftID");
    });
};
