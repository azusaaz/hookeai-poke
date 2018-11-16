exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // knex('order').del(),
        // knex('users').del(),
        // knex('menu_items').del(),
        // knex('order_items').del()
      ]);
    });
};
