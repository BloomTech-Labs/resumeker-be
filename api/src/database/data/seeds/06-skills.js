exports.seed = function skillSeed(knex) {
    // Deletes ALL existing entries
    return knex("skills")
        .del()
        .then(function skillsTable() {
            // Inserts seed entries
            return knex("skills").insert([
                {
                    userId: "google-oauth2|106346646323547324114",
                    skillType: "Technical",
                    name: "L33t haxing skillz",
                },
            ]);
        });
};
