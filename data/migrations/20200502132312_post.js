
exports.up = function(knex) {
  return knex.schema
  .createTable('post', post => {
    post
      .increments();
    post
      .integer('verse_id')
      .unsigned()
    post
      .foreign('verse_id')
      .references('post_id')
      .inTable('post_verse')
      .onDelete('cascade');
    post
      .integer('story_id')
      .unsigned()
    post
      .foreign('story_id')
      .references('post_id')
      .inTable('post_story')
      .onDelete('cascade');
    post
      .integer('application_id')
      .unsigned()
    post
      .foreign('application_id')
      .references('post_id')
      .inTable('post_application')
      .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('post')
};
