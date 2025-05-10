const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Schedules = sequelize.define('schedule-table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slot: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Schedules;