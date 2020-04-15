
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};


exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('users', tbl => {
      // creates a text field called id which will hold the auth0 user-id (both required and unique)
      tbl.text('id', 36).unique().notNullable();
      // creates a text field called email which is both required and unique
      tbl.text('email', 50).unique().notNullable();
      // creates a text field called userImageURL is both required and unique 
      tbl.text('userImageURL').unique().notNullable();
      // creates a text field called firstName is both required and unique 
      tbl.text('firstName').unique().notNullable();
      // creates a text field called lastName is both required and unique 
      tbl.text('lastName').unique().notNullable();

    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('users');
  };



