var { buildSchema } = require('graphql');


var schema = buildSchema(`
  input UserInput {
    username: String
    password: String,
    phoneNumber: String
    email: String
    country: String
    ratings: Int
    firstName: String
    lastName: String
    dob: String
  }

  type User {
    _id: String
    username: String
    password: String
    phoneNumber: String
    email: String
    country: String
    ratings: Int
    active: Boolean
    firstName: String
    lastName: String
    dob: String
  }

  type Query {
    getUser(username: String): User
  }

  type Mutation {
    register(user: UserInput): User
    login(username: String, password: String): User
  }
`);

module.exports = schema;