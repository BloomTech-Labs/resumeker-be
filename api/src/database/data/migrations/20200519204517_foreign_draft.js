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
    await knex.schema.alterTable("drafts", (table) => {
        table.dropColumn("roleID");
        table.dropColumn("projectID");
        table.dropColumn("skillID");
        table.dropColumn("workID");
        table.dropColumn("educationID");
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

    await knex.schema.alterTable("drafts", (table) => {
        table.integer("roleID");
        table.foreign("roleID").references("roles.id");
        table.integer("projectID");
        table.foreign("projectID").references("projects.id");
        table.integer("skillID");
        table.foreign("skillID").references("skills.id");
        table.integer("workID");
        table.foreign("workID").references("workHistory.id");
        table.integer("educationID");
        table.foreign("educationID").references("education.id");
    });
};
