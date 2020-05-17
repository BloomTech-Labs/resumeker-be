exports.seed = function userSeed(knex) {
    return knex("users")
        .del()
        .then(function userTable() {
            return knex("users").insert([
                {
                    id: "google-oauth2|106346646323547324114",
                    email: "labs.pt.resumeker@gmail.com",
                    firstName: "Labs",
                    lastName: "Resumeker",
                },
                {
                    id: "1",
                    email: "blah@blah.com",
                    firstName: "Firstname 1",
                    lastName: "Lastname 1",
                },
            ]);
        });
};
