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

	input createPostInput {
		title: String!
		body: String
	}

	type User {
		id: Int
		firstname: String
		lastname: String
		email: String!
		jwt: String
	}

	type Post {
		title: String
		body: String
	}

	type Query {
		sayHi: String
		users: [User]
		posts: [Post]
	}
	type Mutation {
		createUser(input: createUserInput): User
		login(input: loginInput): User

		createPost(input: createPostInput): Post
	}
`;

module.exports = typeDefs;
