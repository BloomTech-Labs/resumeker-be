exports.up = async (knex) => {
    await knex.schema.alterTable("workHistory", (table) => {
        table.varchar("company");
        table.dropUnique("startDate");
    });
    await knex.schema.alterTable("projects", (table) => {
        table.dropColumn("roleDescription");
    });
};

exports.down = async (knex) => {
    await knex.schema.alterTable("workHistory", (table) => {
        table.dropColumn("company");
        table.text("startDate").unique().alter();
    });
    await knex.schema.alterTable("projects", (table) => {
        // remove role descriptions
        table.text("roleDescription");
    });
};
