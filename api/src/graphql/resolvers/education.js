const db = require("../../database/config/dbConfig");

const education = db("education");
const DRAFTS = "drafts";
module.exports = {
    Query: {
        getEducationHistory: async (
            __,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            const result = await education
                .select("*")
                .join(DRAFTS, "education.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });

            // if array isn't empty, and the id doesn't match
            if (result.length > 0 && result.userID !== decoded.sub) {
                throwAuthError();
            }
            return education;
        },
    },
    Mutation: {
        addEducationHistory: async (
            _,
            { input, draftID: id },
            { decoded, throwAuthError }
        ) => {
            // verify that draft exists and checks authorizations
            const draft = await db(DRAFTS).where({ id });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }
            const educationInput = { ...input, draftID: id };
            const [result] = await education.insert(educationInput, ["*"]);
            return result;
        },
        updateEducationHistory: () => {},
    },
};
