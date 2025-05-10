const sequelize = require("../util/database");

const Sequelize = require("sequelize");


const Slots = sequelize.define('slots-table', {
    slotTime: {
        type: Sequelize.TIME,
        allowNull: false,
        unique: true
    },
    availableSlots: {
        type: Sequelize.INTEGER,
        defaultValue: 4,
        allowNull: true
    }
})

module.exports = Slots