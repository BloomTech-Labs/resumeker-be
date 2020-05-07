exports.seed = function userSeed(knex) {
    return knex("users")
        .del()
        .then(function userTable() {
            return knex("users").insert([
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
            ]);
        });
};
