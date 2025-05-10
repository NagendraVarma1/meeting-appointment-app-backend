const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-app', 'root', 'Veera@512', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;