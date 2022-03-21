const UserResolvers = require('./user');
module.exports = {
	Query: {
		sayHi: () => 'Hi',
		...UserResolvers.Query,
	},
	Mutation: {
		...UserResolvers.Mutation,
	},
};
