exports.seed = function (knex) {
    return knex("workHistory")
        .del()
        .then(function () {
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
