exports.seed = async function (knex) {
    await knex("users").insert([
        {
            email: "tester1@testseed.com",
            firstName: "Test User",
            lastName: "1",
        },
        {
            email: "tester2@testseed.com",
            firstName: "Test User",
            lastName: "2",
        },
        {
            email: "tester3@testseed.com",
            firstName: "Test User",
            lastName: "3",
        },
    ]);
};
