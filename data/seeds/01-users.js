const bcrypt =require('bcrypt');
const password1 = bcrypt.hashSync(process.env.USER_PASSWORD, 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          username: 1, 
          password: password1,
          email: 'edmadrigal@yahoo.com',
          fname: 'Eddie',
          lname: 'Madrigal',
          role_id: 1
        }
      ]);
    });
};
