exports.seed = function hobbySeed(knex) {
    // Deletes ALL existing entries
    return knex("hobbies")
        .del()
        .then(function hobbyTable() {
            // Inserts seed entries
            return knex("hobbies").insert([
                {
                    draftID: 1000,
                    name: "Fishing",
                },
                {
                    draftID: 2000,
                    name: "Absolutely nothing",
                },
                {
                    draftID: 3000,
                    name: "Knitting",
                },
            ]);
        });
};
