
exports.up = function(knex) {
  return knex.schema
  .createTable('posts_application', posts_app => {
    posts_app
      .increments();
    posts_app
      .integer('post_id')
      .unsigned()
    posts_app
      .integer('application_id')
      .unsigned();
    posts_app
      .foreign('application_id')
      .references('id')
      .inTable('application')
      .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts_application')
};
