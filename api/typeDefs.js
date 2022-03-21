const { gql } = require('apollo-server-express');

const typeDefs = gql`
	input createUserInput {
		firstname: String
		lastname: String
		email: String!
		password: String!
	}
	input loginInput {
		email: String!
		password: String!
	}

	type User {
		id: Int
		firstname: String
		lastname: String
		email: String!
		jwt: String
	}

	type Query {
		sayHi: String
		users: [User]
	}
	type Mutation {
		createUser(input: createUserInput): User
		login(input: loginInput): User
	}
`;

module.exports = typeDefs;
