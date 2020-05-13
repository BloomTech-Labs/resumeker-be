exports.seed = function projSeed(knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function projTable() {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    userId: 1,
                    title: "Resumeker",
                    projectUrl:
                        "https://github.com/Lambda-School-Labs/resumeker-be",
                    description: "The best backend you ever seen",
                },
            ]);
        });
};
