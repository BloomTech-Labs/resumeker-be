exports.seed = function roleSeed(knex) {
    // Deletes ALL existing entries
    return knex("roles")
        .del()
        .then(function rolesTable() {
            // Inserts seed entries
            return knex("roles").insert([
                {
                    userId: "google-oauth2|106346646323547324114",
                    name: "Full Stack Engineer",
                },
            ]);
        });
};
