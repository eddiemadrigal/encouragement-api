
exports.up = function(knex) {
  return knex.schema
  .createTable('user', user => {
    user
      .increments();
    user
      .string('username', 30)
      .notNullable()
      .unique();
    user
      .string('email', 50)
    user
      .string('password', 128)
      .notNullable();
    user
      .string('fname', 30);
    user
      .string('lname', 30);
    user
      .integer('role_id')
      .unsigned();
    user
      .foreign('role_id')
      .references('id')
      .inTable('role')
      .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user')
};
