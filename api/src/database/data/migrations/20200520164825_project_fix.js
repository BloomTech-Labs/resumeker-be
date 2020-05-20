exports.up = (knex) =>
    knex.schema.alterTable("projects", (table) => {
        table.text("projectUrl").nullable().alter();
        table.text("description").nullable().alter();
        table.text("endDate").nullable().alter();
        table.dropColumn("role");
    });

exports.down = (knex) =>
    knex.schema.alterTable("projects", (table) => {
        table.text("projectUrl").notNullable().alter();
        table.text("description").notNullable().alter();
        table.text("endDate").notNullable().alter();
        table.text("role").notNullable().defaultTo("unknown");
    });
