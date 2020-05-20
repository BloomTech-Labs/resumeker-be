exports.seed = function roleSeed(knex) {
    // Deletes ALL existing entries
    return knex("roles")
        .del()
        .then(function rolesTable() {
            // Inserts seed entries
            return knex("roles").insert([
                {
                    id: "1",
                    draftID: 2000,
                    name: "Full Stack Engineer",
                },
            ]);
        });
};
