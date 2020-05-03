
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        { title: 'admin' },
        { title: 'clergy' },
        { title: 'office' },
        { title: 'volunteer' },
      ]);
    });
};
