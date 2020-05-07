exports.seed = function eduSeed(knex) {
    return knex("education")
        .del()
        .then(function eduTable() {
            return knex("education").insert([
                {
                    userId: 1,
                    schoolType: "UNDERGRAD",
                    schoolName: "UCLA",
                    startDate: "1995-02-11",
                    endDate: "2000-02-12",
                    certName: "Cert",
                    courses: "A Course",
                },
            ]);
        });
};
