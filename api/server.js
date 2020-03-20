const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');



const Sequelize = require('sequelize');


const sequelize = new Sequelize(
                        process.env.DB_NAME, 
                        process.env.DB_USERNAME, 
                        process.env.DB_PASSWORD, 
                        {
                            host: process.env.END_POINT,
                            dialect: 'postgres'
                        });


sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

module.exports = server;
