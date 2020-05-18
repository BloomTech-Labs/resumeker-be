exports.up = (knex) =>
    knex.schema.createTable("drafts", (table) => {
        table.increments("id").notNullable();
        table.varchar("user_id").notNullable();
        table.foreign("user_id").references("users.id");
        table.integer("role_id").notNullable();
        table.foreign("role_id").references("roles.id");
        table.integer("project_id").notNullable();
        table.foreign("project_id").references("projects.id");
        table.integer("skill_id").notNullable();
        table.foreign("skill_id").references("skills.id");
        table.integer("work_id").notNullable();
        table.foreign("work_id").references("workHistory.id");
        table.integer("education_id").notNullable();
        table.foreign("education_id").references("education.id");
    });

exports.down = (knex) => knex.schema.dropTableIfExists("drafts");
