const UserResolvers = require('./user');
const PostResolvers = require('./post');
module.exports = {
	Query: {
		sayHi: () => 'Hi',
		...UserResolvers.Query,
		...PostResolvers.Query,
	},
	Mutation: {
		...UserResolvers.Mutation,
		...PostResolvers.Mutation,
	},
};
