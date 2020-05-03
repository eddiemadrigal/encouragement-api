
exports.up = function(knex) {
  return knex.schema
  .createTable('application', app => {
    app
      .increments();
    app
      .text('content', 'longtext')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('application')
};
