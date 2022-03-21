const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const User = require('../../../models/User');
module.exports = {
	Query: {
		users: async () => {
			return await User.findAll();
		},
	},
	Mutation: {
		createUser: async (_, { input }) => {
			try {
				const password = await bcrypt.hash(input.password, saltRounds);
				const user = await User.create({ ...input, password });
				return user;
			} catch (err) {
				console.log(err);
			}
		},
		login: async (_, { input }) => {
			try {
				const user = await User.findOne({
					where: {
						email: input.email,
					},
				});
				if (!user) {
					return null;
				}
				const isVerified = await bcrypt.compare(
					input.password,
					user.password
				);
				if (!isVerified) {
					return null;
				}
				const token = jwt.sign({ id: user.id }, 'shhhSecretKey', {
					expiresIn: '1h',
				});
				return { ...user.toJSON(), jwt: token };
			} catch (err) {
				console.log(err);
			}
		},
	},
};
