exports.seed = async function(knex) {
  await knex("users").insert([
    { username: "test1", email: "tester1@testseed.com", userImageURL: "image_1.jpg", first_name: "Test User", last_name: "1" },
    { username: "test2", email: "tester2@testseed.com", userImageURL: "image_2.jpg", first_name: "Test User", last_name: "2" },
    { username: "test3", email: "tester3@testseed.com", userImageURL: "image_3.jpg", first_name: "Test User", last_name: "3" },
  ])
};