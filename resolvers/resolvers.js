const db = require("../database/config/dbConfig");

module.exports =  {
    Query: {
    getUser: (parent, { id }, _) => {
                
            return db("users").where( { id }).first();
        },
    allUsers: (parent, args, _) => {
            
            return db("users");
        },
    getToken: (parent,args, context) => {

            return context
            
        },
    },
    Mutation: {
        createUser: (parent, {data}, _) => {
            return db("users").insert({data})
        }
    }
};   