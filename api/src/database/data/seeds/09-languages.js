exports.seed = function langSeed(knex) {
    return knex("languages")
        .del()
        .then(function langTable() {
            return knex("languages").insert([
                {
                    draftID: 3000,
                    language: "French",
                },
            ]);
        });
};
