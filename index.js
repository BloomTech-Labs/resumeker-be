const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./api/schema/typeDefs');

const resolvers = require('./resolvers/resolvers');

const PORT = process.env.PORT;

const apollo = new ApolloServer({ 
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();

apollo.applyMiddleware({ app });

if(!module.parent) {
  app.listen(PORT || 8080, () => {
    console.log(`\n 🚀 Server listening on localhost:${PORT}${apollo.graphqlPath} 🚀 \n`)
  })
}