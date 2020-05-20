const db = require("../../database/config/dbConfig");

const education = db("education");

module.exports = {
    Query: {
        getEducationHistory: async (__, { draftID }, { decoded }) => {
            const educations = await education
                .join("drafts", "education.id", "=", "drafts.educationID")
                .where({ draftID })
                .select("education.*", "draft.userID");

            console.log(educations);
            console.log(decoded.sub);
            // query the draft joined with the education, and check userID on there
            return educations;
        },
    },
    Mutation: {
        addEducationHistory: async (__, { input, draftID }, { decoded }) => {
            // input the education history information
            // update the draft in SQL
            const [inserted] = await education.insert(
                {
                    schoolName,
                    schoolType,
                    startDate,
                    endDate,
                    certName,
                    userID: decoded.sub,
                },
                [
                    "schoolName",
                    "schoolType",
                    "startDate",
                    "endDate",
                    "certName",
                    "userID",
                    "id",
                ]
            );
            return inserted;
        },
        updateEducationHistory: async (
            __,
            {
                schoolName,
                schoolType,
                startDate,
                endDate,
                certName,
                educationID,
            },
            { decoded }
        ) => {
            const [updated] = await education.where({ id: educationID }).update(
                {
                    schoolName,
                    schoolType,
                    startDate,
                    endDate,
                    certName,
                    userID: decoded.sub,
                },
                [
                    "schoolName",
                    "schoolType",
                    "startDate",
                    "endDate",
                    "certName",
                    "userID",
                    "id",
                ]
            );
            return updated;
        },
    },
};
