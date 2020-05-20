// WIP
// const db = require("../../database/config/dbConfig");

// module.exports = {
//     Query: {
//         getQuestions: async (parent, { roleID }) => {
//             return db("questions").where({ roleID });
//         },
//     },
//     Mutation: {
//         addQuestion: async (parent, args) => {
//             return db("questions").insert({ args }, ["id"]);
//         },
//         updateQuestion: async (parent, args) => {
//             return db("questions")
//                 .where({ id: args.id })
//                 .update(args.data, ["id", "title"]);
//         },
//     },
// };
