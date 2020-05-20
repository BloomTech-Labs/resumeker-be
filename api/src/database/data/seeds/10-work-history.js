exports.seed = function workSeed(knex) {
    return knex("workHistory")
        .del()
        .then(function workTable() {
            return knex("workHistory").insert([
                {
                    draftID: 1000,
                    startDate: "2010-01-01",
                    endDate: "2010-12-31",
                    title: "Line Cook",
                    description:
                        "Double triple bossy deluxe, on a raft, four by four animal style, extra shingles with a shimmy and a squeeze, light axle grease, make it cry, burn it, and let it swim.",
                    company: "Krusty Krab",
                },
            ]);
        });
};
