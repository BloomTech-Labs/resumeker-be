const db = require("../../database/config/dbConfig");

const education = db("education");

module.exports = {
    Query: {
        getEducationHistory: async (__, { draftID }, { decoded }) => {
            const educations = await education
                .join("drafts", "education.draftID", "=", "drafts.id")
                .select("education.*", "draft.userID")
                .where({ draftID });

            console.log(educations);
            console.log(decoded.sub);
            // query the draft joined with the education, and check userID on there
            return educations;
        },
    },
    Mutation: {
        addEducationHistory: () => {
            console.log("wip");
            return { error: "WIP" };
        },
        updateEducationHistory: () => {},
    },
};
