
exports.up = function(knex) {
  return knex.schema
  .createTable('posts_stories', posts_stories => {
    posts_stories
      .increments();
    posts_stories
      .integer('post_id')
      .unsigned();
    posts_stories
      .integer('story_id')
      .unsigned();
    posts_stories
      .foreign('story_id')
      .references('id')
      .inTable('story')
      .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts_stories')
};
