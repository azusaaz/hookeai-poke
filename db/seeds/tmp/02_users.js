exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert([
          {id: 1, name: 'Alice', phone: 64712312},
          {id: 2, name: 'Bob', phone: 64712312},
          {id: 3, name: 'Charlie', phone: 64712312}
        ])
      ])
  });
};


