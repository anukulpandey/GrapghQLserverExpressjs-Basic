// Import Modules
const express = require('express');
let {graphqlHTTP} = require('express-graphql');
const {buildSchema}=require('graphql');

// GraphQL Schema
let schema = buildSchema(`
type Query{
    message: String
}
`);

// Root resolver
let root ={
    message: 'Hello World!'
};

// Create an express server and a GraphQL endpoint.
let app = express();
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql:true
}));

app.listen(3000,()=>console.log('Server started at http://localhost:3000/graphql'));