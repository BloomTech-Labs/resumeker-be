exports.seed = function userSeed(knex) {
    return knex("users")
        .del()
        .then(function userTable() {
            return knex("users").insert([
                {
                    id: "google-oauth2|106346646323547324114",
                },
                {
                    id: "linkedin-oauth2|106346646323547324114",
                },
                {
                    id: "github-oauth2|106346646323547324114",
                },
            ]);
        });
};
