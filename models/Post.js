const { DataTypes, Model } = require('@sequelize/core');
const sequelize = require('../config/db');

class Post extends Model {}

Post.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'Post',
	}
);

module.exports = Post;
