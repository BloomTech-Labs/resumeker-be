exports.up = function migrateUp(knex) {
    return knex.schema.createTable("education", (table) => {
        table.increments("id").notNullable();
        table
            .enu("schoolType", [
                "UNDERGRADUATE",
                "CERTIFICATION",
                "GRADUATE",
                "COURSE",
            ])
            .notNullable();
        table.text("schoolName").notNullable();
        table.date("startDate");
        table.date("endDate");
        table.text("certName");
        table.text("courses");
        table
            .text("userID")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function migrateDown(knex) {
    return knex.schema.dropTableIfExists("education");
};
