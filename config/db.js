const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('parktolus', 'postgres', '0mega99@2018', {
	host: 'localhost',
	dialect: 'postgres',
});

module.exports = sequelize;
