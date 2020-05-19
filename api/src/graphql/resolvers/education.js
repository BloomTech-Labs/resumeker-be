const db = require("../../database/config/dbConfig");

const education = db("education");

module.exports = {
    Query: {
        getEducation: (__, ___, { decoded }) =>
            education.where({ userID: decoded.sub }),
    },
    Mutation: {
        addEducation: async (
            __,
            { schoolName, schoolType, startDate, endDate, certName },
            { decoded }
        ) => {
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
        updateEducation: async (
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
