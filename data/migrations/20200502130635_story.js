
exports.up = function(knex) {
  return knex.schema
  .createTable('story', story => {
    story
      .increments();
    story
      .string('title', 30)
    story
      .integer('author')
    story
      .date('date')
    story
      .string('userid')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('story')
};
