const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")

class Post extends Model { }

Post.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contents: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_created: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    creator: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "user_id"
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    meetup_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    underscored: true,
    freezeTableName: true,
    modelName: "post"
})

module.exports = Post