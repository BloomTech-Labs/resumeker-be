exports.seed = async (knex) => {
    await knex("roles_questions")
        .del()
        .insert([{ roleId: 1, questionId: 1 }]);
};
