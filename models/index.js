const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")
const Attendence = require("./Attendence")
// User belongs to many post and post belong to many user through attendence

Attendence.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Attendence.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Attendence, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Attendence, {
    foreignKey: 'post_id'
  });

// Comment belongs to user and user has many comments
Comment.belongsTo(User, {
    foreignKey: "creator_id"
})

User.hasMany(Comment, {
    foreignKey: "creator_id",
    onDelete: "CASCADE"
})

// Post belongs to user and user has many posts
Post.belongsTo(User, {
    foreignKey: "creator"
})

User.hasMany(Post, {
    foreignKey: "creator",
    onDelete: "CASCADE"
})

// Coment belongs to post and post has many comments
Comment.belongsTo(Post, {
    foreignKey: "post_id"
})

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})



module.exports = {
    User, Post, Comment, Attendence
}