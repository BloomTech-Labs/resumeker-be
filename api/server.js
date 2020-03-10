const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');

const mongoose = require('mongoose');

const options = {
    dbName:'d9pop4okm3g0ni',
    user:'uasvlgqfonqekw',
    pass:'c74d17896311862815e3626e83cd555c704ab9fd482c1b3780e4961ae853ef13'
}

mongoose.connect('https://resumeker.herokuapp.com/v1/graphql', options)
    .then(
        ()=>{ console.log('connected to database') },
        err => { console.log(err) }
    );


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

module.exports = server;
