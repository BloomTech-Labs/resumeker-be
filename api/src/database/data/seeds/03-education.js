exports.seed = function eduSeed(knex) {
    return knex("education")
        .del()
        .then(function eduTable() {
            return knex("education").insert([
                {
                    schoolType: "UNDERGRADUATE",
                    schoolName: "UCLA",
                    startDate: "1995-02-11",
                    endDate: "2000-02-12",
                    certName: "Cert",
                    courses: "A Course",
                },
                {
                    schoolType: "COURSE",
                    schoolName: "A&M",
                    startDate: "2000-02-12",
                    endDate: "2004-06-24",
                    certName: "Cert A",
                    courses: "Another Course",
                },
            ]);
        });
};
