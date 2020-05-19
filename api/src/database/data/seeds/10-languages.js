exports.seed = function langSeed(knex) {
    return knex("languages")
        .del()
        .then(function langTable() {
            return knex("languages").insert([
                {
                    id: 1,
                    language: "English",
                },
            ]);
        });
};
