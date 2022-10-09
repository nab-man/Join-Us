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
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'post_id'
        }
      }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attendence'
})

module.exports = Attendence