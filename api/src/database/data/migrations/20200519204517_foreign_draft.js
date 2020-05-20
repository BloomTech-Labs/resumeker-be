exports.up = async (knex) => {
    await knex.schema.alterTable("education", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("workHistory", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("projects", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("hobbies", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("skills", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("roles", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
    await knex.schema.alterTable("languages", (table) => {
        table.integer("draftID").notNullable();
        table.foreign("draftID").references("drafts.id");
    });
};

exports.down = async (knex) => {
    await knex.schema.alterTable("education", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("workHistory", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("projects", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("hobbies", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("skills", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("roles", (table) => {
        table.dropColumn("draftID").notNullable();
    });
    await knex.schema.alterTable("languages", (table) => {
        table.dropColumn("draftID").notNullable();
    });
};
