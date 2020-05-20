exports.seed = function projSeed(knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function projTable() {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    draftID: 1000,
                    title: "Resumeker",
                    startDate: "2020-02-30",
                    endDate: "2020-06-20",
                    projectUrl:
                        "https://github.com/Lambda-School-Labs/resumeker-be",
                    description: "The best backend you ever seen",
                },
            ]);
        });
};
