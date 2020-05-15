exports.seed = function projSeed(knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function projTable() {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    userId: "google-oauth2|106346646323547324114",
                    title: "Resumeker",
                    startDate: "2020-02-30",
                    endDate: "2020-06-20",
                    role: "Back end dev",
                    roleDescription: "Worked on the backend server",
                    projectUrl:
                        "https://github.com/Lambda-School-Labs/resumeker-be",
                    description: "The best backend you ever seen",
                },
            ]);
        });
};
