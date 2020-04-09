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
        
        firstName:{ type: GraphQLString },
        lastName:{ type: GraphQLString },
        userName:{ type: GraphQLString },
        userImageURL:{ type: GraphQLString },
        userId:{ type: GraphQLString }
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
                firstName:{ type: GraphQLString },
                lastName:{ type: GraphQLString },
                userName:{ type: GraphQLString },
                userImageURL:{ type: GraphQLString },
                userId:{ type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    userName: args.userName,
                    userImageURL: args.userImageURL,
                    userId:args.userId
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