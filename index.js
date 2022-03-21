const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const Post = require('./models/Post');

const typeDefs = require('./api/typeDefs');
const resolvers = require('./api/resolvers/index');

const jwt = require('express-jwt');
const bodyParser = require('body-parser');

async function startServer() {
	const app = express();
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
		context: (req) => {
			return req;
		},
	});

	await server.start();
	server.applyMiddleware({ app });
	await Post.sync();
	app.listen(4000, () => console.log('Server listning on port 4000'));
}

startServer()
	.then(() => console.log('Server Started'))
	.catch((e) => console.log(e));
