exports.seed = function userSeed(knex) {
    return knex("users")
        .del()
        .then(function userTable() {
            return knex("users").insert([
                {
                    id: "google-oauth2|106346646323547324114",
                    email: "labs.pt.resumeker@gmail.com",
                    userImageURL:
                        "https://lh5.googleusercontent.com/-5p5IU-Az4fQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJO1vxjDoiIzsEc4V9DVyMfpOFluQQ/photo.jpg",
                    firstName: "Labs",
                    lastname: "Resumeker",
                },
            ]);
        });
};
