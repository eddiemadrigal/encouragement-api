
exports.up = function(knex) {
  return knex.schema
  .createTable('role', user => {
    user
      .increments();
    user
      .string('title', 30)
      .notNullable()
      .unique();    
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('role')
};
