const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")

class Attendence extends Model { }

Attendence.init({
    attendence_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attendence'
})

module.exports = Attendence