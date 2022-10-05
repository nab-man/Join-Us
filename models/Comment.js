const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")

class Comment extends Model { }

Comment.init({
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creator_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "user_id"
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "post",
            key: "post_id"
        }
    },
    date_created: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: "comment"
})

module.exports = Comment