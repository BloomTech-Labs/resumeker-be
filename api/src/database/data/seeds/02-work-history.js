exports.seed = function workSeed(knex) {
    return knex("workHistory")
        .del()
        .then(function workTable() {
            return knex("workHistory").insert([
                {
                    userId: 1,
                    startDate: "2010-01-01",
                    endDate: "2010-12-31",
                    title: "Senior Developer",
                    description: "Wrote The Dopest Code",
                },
            ]);
        });
};
