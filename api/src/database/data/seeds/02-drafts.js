exports.seed = (knex) => {
    return knex("drafts")
        .del()
        .then(() => {
            return knex("drafts").insert([
                { id: 1000, userID: "google-oauth2|106346646323547324114" },
                { id: 2000, userID: "linkedin-oauth2|106346646323547324114" },
                { id: 3000, userID: "github-oauth2|106346646323547324114" },
            ]);
        });
};
