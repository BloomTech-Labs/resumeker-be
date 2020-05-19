exports.seed = function hobbySeed(knex) {
    // Deletes ALL existing entries
    return knex("hobbies")
        .del()
        .then(function hobbyTable() {
            // Inserts seed entries
            return knex("hobbies").insert([
                {
                    userID: "google-oauth2|106346646323547324114",
                    name: "Fishing",
                },
                {
                    userID: "google-oauth2|106346646323547324114",
                    name: "Knitting",
                },
            ]);
        });
};
