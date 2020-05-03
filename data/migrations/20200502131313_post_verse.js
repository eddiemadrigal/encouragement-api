
exports.up = function(knex) {
  return knex.schema
  .createTable('post_verse', post_verse => {
    post_verse
      .increments();
    post_verse
      .integer('post_id')
      .unsigned();
    post_verse
      .integer('verse_id')
      .unsigned();
    post_verse
      .foreign('verse_id')
      .references('id')
      .inTable('verse')
      .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('post_verse')
};
