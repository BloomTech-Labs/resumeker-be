
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
      table.increments("id").notNullable()
      table.text("email").notNullable().unique();
      table.text("userImageURL").notNullable().unique();
      table.text("first_name").notNullable();
      table.text("last_name").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
