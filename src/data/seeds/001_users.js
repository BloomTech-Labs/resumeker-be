exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
      .truncate()
      .then(function () {
        // Inserts seed entries
        return knex("users").insert([
        {   id: "google-oauth2|105083135226182798575", 
            email: "email1@email.com",
            userImageURL: "ssalsjdflsdjflksjdl2",
            firstName: "Charlie",
            lastName: "Montoya"
        },
        {   id: "google-oauth2|105083135226182798574", 
            email: "email1@email.com",
            userImageURL: "ssalsjdflsdjflksjdl3",
            firstName: "Barbara",
            lastName: "Mayfield"
        },
        ]);
      });
  };
