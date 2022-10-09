const { Comment } = require('../models');

const commentdata = [
    {
        content: 'this is a test comment',
        creator_id: [1],
        post_id: [1],
        date_created: new Date()
    }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
