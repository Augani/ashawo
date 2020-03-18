var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require
const Root = require('./resolvers');
const schema = require('./schema');
const mongoose  = require('./Database');
const path  = require('path')
var app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: Root,
  graphiql: true,
}));



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  // app.use(Secure);
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}else{
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(4000);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');