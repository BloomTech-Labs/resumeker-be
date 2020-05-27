const db = require("../../database/config/dbConfig");

const tableName = "languages";
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getRole: async (parent, { roleID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName).where({ id: roleID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
    },
    Mutation: {
        addRole: async (parent, args) => {
            return db("roles").insert({ args }, ["id"]);
        },
        updateRole: async (parent, args) => {
            return db("roles")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
