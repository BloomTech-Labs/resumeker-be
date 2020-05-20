exports.up = (knex) =>
    knex.schema.createTable("drafts", (table) => {
        table.increments("id").primary();
        table.varchar("userID").notNullable();
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
        table.varchar("name").notNullable();
        table.varchar("email").notNullable();
    });

exports.down = (knex) => knex.schema.dropTableIfExists("drafts");
