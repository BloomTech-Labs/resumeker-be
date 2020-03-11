const graphql = require('graphql');
// const lodash = require('lodash');
// const User = require('../models/users');


const { 
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLID
} = graphql;




const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id:{ type: GraphQLID },
        first_name:{ type: GraphQLString },
        last_name:{ type: GraphQLString },
        username:{ type: GraphQLString },
        password:{ type: GraphQLString}
    })
});




const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{ cellphone: {type: GraphQLString }},
            resolve(parent, args){
                //Returns only one user
                return User.findById(args.id)
            }
        },
        users:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                //Returns All Users
                return User.find({})
            } 
        }
    }
});


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addUser:{
            type:UserType,
            args:{
                first_name:{ type: GraphQLString },
                last_name:{ type: GraphQLString },
                username:{ type: GraphQLString },
                password:{ type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    first_name: args.first_name,
                    last_name: args.last_name,
                    username: args.username,
                    password: args.password
                });
                
                return user.save()
            }
        }
    }
});




module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});