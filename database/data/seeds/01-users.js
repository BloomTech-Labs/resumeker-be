exports.seed = async function(knex) {
  await knex("users").insert([
    { email: "tester1@testseed.com", userImageURL: "image_1.jpg", firstName: "Test User", lastName: "1" },
    { email: "tester2@testseed.com", userImageURL: "image_2.jpg", firstName: "Test User", lastName: "2" },
    { email: "tester3@testseed.com", userImageURL: "image_3.jpg", firstName: "Test User", lastName: "3" },
  ])
};