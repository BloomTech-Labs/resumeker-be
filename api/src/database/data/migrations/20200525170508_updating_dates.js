exports.up = async function(knex) {
    await knex.schema.alterTable("education", (table) => {
        table.text("startDate").alter();
        table.text("endDate").alter();
    })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("education", (table) => {
        table.date("startDate").alter();
        table.date("endDate").alter();
    })
};
