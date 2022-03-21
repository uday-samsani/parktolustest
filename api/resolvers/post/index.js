const jwt = require('jsonwebtoken');
const Post = require('../../../models/Post');
const authenticate = require('../../../utils/authenticate');
module.exports = {
	Query: {
		posts: async () => {
			return await Post.findAll();
		},
	},
	Mutation: {
		createPost: async (_, { input }, context) => {
			authenticate(context);
			const post = await Post.create(input);
			return post;
		},
	},
};
