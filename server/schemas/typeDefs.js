const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # input data which will be used in queries
  input ProfessionInput {
    _id: ID!
    professionOption: String
  }
  input InterestInput {
    _id: ID!
    interestOption: String
  }
  input userFilter {
    # we use it like that not to cast on the server side
    interest: ID
    profession: ID
    username: String
  }
  # typedefs for the schema
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    organization: String!
    location: String!
    profession: Profession!
    interest: Interest!
  }
  type Interest {
    _id: ID
    interestOption: String!
  }
  type Profession {
    _id: ID
    professionOption: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    # Bad idea to use username here as it might be not unique for the user either _id or email.
    user(username: String!): User
    users(filter: userFilter): [User!]
    interests: [Interest!]
    professions: [Profession!]
  }
  type Mutation {
    addUser(
      username: String
      email: String!
      password: String!
      organization: String
      location: String
      profession: [ID]
      interest: [ID]
    ): Auth
    login(email: String!, password: String!): Auth
    changeInterest(interestOption: [ID]): Interest
    removeUser(userId: ID): User
  }
`;

module.exports = typeDefs;
