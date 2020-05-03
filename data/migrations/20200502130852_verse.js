
exports.up = function(knex) {
  return knex.schema
  .createTable('verse', bible => {
    bible
      .increments();
    bible
      .string('book', 30)
      .notNullable()
    bible 
      .integer('chapter')
      .notNullable()
    bible
      .integer('verse')
      .notNullable()
    bible 
      .string('content')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('verse')
};
