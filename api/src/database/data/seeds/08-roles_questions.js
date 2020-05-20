exports.seed = async (knex) => {
    await knex("roles_questions")
        .del()
        .insert([{ roleID: 1, questionID: 1 }]);
};
