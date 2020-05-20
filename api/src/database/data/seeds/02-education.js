exports.seed = function eduSeed(knex) {
    return knex("education")
        .del()
        .then(function eduTable() {
            return knex("education").insert([
                {
                    draftID: 1000,
                    schoolType: "UNDERGRADUATE",
                    schoolName: "UCLA",
                    startDate: "1995-02-11",
                    endDate: "2000-02-12",
                    certName: "Cert",
                    courses: "A Course",
                },
                {
                    draftID: 2000,
                    schoolType: "COURSE",
                    schoolName: "A&M",
                    startDate: "2000-02-12",
                    endDate: "2004-06-24",
                    certName: "Cert A",
                    courses: "Another Course",
                },
                {
                    draftID: 3000,
                    schoolType: "COURSE",
                    schoolName: "Northeastern",
                    startDate: "2019-07-02",
                    endDate: "2020-06-24",
                    certName: "Cert A",
                    courses: "Another Course",
                },
            ]);
        });
};
