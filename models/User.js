const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")

class User extends Model { }

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: "user"
})

module.exports = User