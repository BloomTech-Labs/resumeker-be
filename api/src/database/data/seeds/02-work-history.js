
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workHistory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workHistory').insert([
        {
          startDate: '2010-01-01',
          endDate: '2010-12-31',
          title: 'Senior Developer',
          description: 'Wrote The Dopest Code'
        },
        
      ]);
    });
};
