exports.seed = (knex) => {
    return knex("drafts")
        .del()
        .then(() => {
            return knex("drafts").insert([
                {
                    id: 1000,
                    userID: "google-oauth2|106346646323547324114",
                    name: "Spongebob Squarepants",
                    email: "speengbab@bik.com",
                },
                {
                    id: 2000,
                    userID: "linkedin-oauth2|106346646323547324114",
                    name: "Patrick Star",
                    email: "pstar@star.com",
                },
                {
                    id: 3000,
                    userID: "github-oauth2|106346646323547324114",
                    name: "Squidward Tentacles",
                    email: "tentacles@tentacles.com",
                },
            ]);
        });
};
