exports.up = function migrateUp(knex) {
    return knex.schema.createTable("education", (table) => {
        table.increments("id").notNullable();
        table.enu("schoolType", [
            "HIGHSCHOOL_OR_EQUIVALENT",
            "UNDERGRADUATE",
            "BOOTCAMP_OR_EQUIVALENT",
            "POST_SECONDARY",
        ]);
        table.text("schoolName").notNullable();
        table.date("startDate");
        table.date("endDate");
        table.text("certName").notNullable();
        table.text("courses").notNullable();
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("education");
};
