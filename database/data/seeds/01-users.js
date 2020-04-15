exports.seed = async function(knex) {
  await knex("users").insert([
    { email: "tester1@testseed.com", userImageURL: "image_1.jpg", first_name: "Test User", last_name: "1" },
    { email: "tester2@testseed.com", userImageURL: "image_2.jpg", first_name: "Test User", last_name: "2" },
    { email: "tester3@testseed.com", userImageURL: "image_3.jpg", first_name: "Test User", last_name: "3" },
  ])
};