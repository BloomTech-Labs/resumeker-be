const db = require("../../database/config/dbConfig");

const education = db("education");

module.exports = {
    Query: {
        getEducation: (__, ___, { decoded }) =>
            education.where({ userId: decoded.sub }),
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
                    userId: decoded.sub,
                },
                [
                    "schoolName",
                    "schoolType",
                    "startDate",
                    "endDate",
                    "certName",
                    "userId",
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
                    userId: decoded.sub,
                },
                [
                    "schoolName",
                    "schoolType",
                    "startDate",
                    "endDate",
                    "certName",
                    "userId",
                    "id",
                ]
            );
            console.log(updated);
            return updated;
        },
    },
};
