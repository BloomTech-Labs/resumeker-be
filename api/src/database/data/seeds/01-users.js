exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .truncate()
        .then(function () {
            return knex("users").insert([
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
        });
};
