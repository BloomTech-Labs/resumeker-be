exports.up = (knex) =>
    knex.schema.createTable("drafts", (table) => {
        table.increments("id").notNullable();
        table.varchar("userID").notNullable();
        table.foreign("userID").references("users.id");
        table.integer("roleID").notNullable();
        table.foreign("roleID").references("roles.id");
        table.integer("projectID").notNullable();
        table.foreign("projectID").references("projects.id");
        table.integer("skillID").notNullable();
        table.foreign("skillID").references("skills.id");
        table.integer("workID").notNullable();
        table.foreign("workID").references("workHistory.id");
        table.integer("educationID").notNullable();
        table.foreign("educationID").references("education.id");
    });

exports.down = (knex) => knex.schema.dropTableIfExists("drafts");
