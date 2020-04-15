const db = require("../data/knexConf");

module.exports =  {
    Query: {
    getUser: (parent, { id }, _) => {
                
            return db("users").where( { id }).first();
        },
    allUsers: (parent, args, _) => {
            
            return db("users");
        },
    },
    Mutation: {
        createUser: (parent, {data}, _) => {
            return db("users").insert({data})
        }
    }
};   