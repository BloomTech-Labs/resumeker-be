const db = require("../../database/config/dbConfig");

const education = db("education");
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getEducationHistory: async (
            _,
            { educationID },
            { decoded, throwAuthError }
        ) => {
            const { userID, ...result } = await education
                .select("education.*", "drafts.userID")
                .join(DRAFTS, "education.draftID", "=", `${DRAFTS}.id`)
                .where({
                    id: educationID,
                });

            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return result;
        },
        getEducationByDraft: async (
            __,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            const results = await education
                .select("education.*", "drafts.userID")
                .join(DRAFTS, "education.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });
            // if array isn't empty, and the id doesn't match
            if (results.length > 0 && results[0].userID !== decoded.sub) {
                throwAuthError();
            }

            // dropping userID in returned objects
            return results.map(({ userID, ...keepKeys }) => keepKeys);
        },
    },
    Mutation: {
        addEducationHistory: async (
            _,
            { input },
            { decoded, throwAuthError }
        ) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (draft.length === 0) {
                throw Error("Draft does not exist.");
            }

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await education.insert(input, ["*"]);
            return result;
        },
        updateEducationHistory: () => {},
        deleteEducation: async (
            _,
            { educationID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await education
                .select("drafts.userID")
                .join(DRAFTS, "education.draftID", "=", `${DRAFTS}.id`)
                .where("education.id", educationID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }

            return education.where({ id: educationID }).del();
        },
    },
};
