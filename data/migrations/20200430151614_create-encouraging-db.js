
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users
      .increments();
    users
      .string('username', 30)
      .notNullable()
      .unique();
    users
      .string('email', 50)
    users
      .string('password', 128)
      .notNullable();
    users
      .string('fname', 30);
    users
      .string('lname', 30);
    users
      .integer('roleid')
      .unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
