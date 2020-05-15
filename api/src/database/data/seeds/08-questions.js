exports.seed = function questionsSeed(knex) {
    // Deletes ALL existing entries
    return knex("questions")
        .del()
        .then(function questionsTable() {
            // Inserts seed entries
            return knex("questions").insert([
                {
                    id: 1,
                    roleId: "1",
                    question: "What do you mean by full stack?",
                    title: "title",
                },
            ]);
        });
};
