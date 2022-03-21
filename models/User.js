const { DataTypes, Model } = require('@sequelize/core');
const sequelize = require('../config/db');

class User extends Model {}

User.init(
	{
		firstname: {
			type: DataTypes.STRING,
		},
		lastname: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'User',
	}
);

module.exports = User;
