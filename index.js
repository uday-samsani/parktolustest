const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const User = require('./models/User');

const typeDefs = require('./api/typeDefs');
const resolvers = require('./api/resolvers/index');

async function startServer() {
	const app = express();
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
	});

	await server.start();
	server.applyMiddleware({ app });
	await User.sync();
	app.listen(4000, () => console.log('Server listning on port 4000'));
}

startServer()
	.then(() => console.log('Server Started'))
	.catch((e) => console.log(e));
