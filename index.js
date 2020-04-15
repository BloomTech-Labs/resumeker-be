const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./api/schema/typeDefs');

const resolvers = require('./resolvers/resolvers');

const PORT = process.env.PORT;

const apollo = new ApolloServer({ 
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

const app = express();

apollo.applyMiddleware({ app });

app.listen(PORT || 8000, () => 
  console.log(`🚀 Server ready at ${PORT}${apollo.graphqlPath}`)
  );