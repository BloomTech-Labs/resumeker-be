exports.seed = function skillSeed(knex) {
    // Deletes ALL existing entries
    return knex("skills")
        .del()
        .then(function skillsTable() {
            // Inserts seed entries
            return knex("skills").insert([
                {
                    draftID: 1000,
                    skillType: "Technical",
                    name: "L33t haxing skillz",
                },
            ]);
        });
};
