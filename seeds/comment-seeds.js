const { Comment } = require('../models');

const commentdata = [
    {
        content: 'this is a test comment',
        creator_id: [1],
        post_id: [3],
        date_created: new Date()
    },
    {
        content: 'this is a test comment',
        creator_id: [3],
        post_id: [2],
        date_created: new Date()
    },
    {
        content: 'this is a test comment',
        creator_id: [1],
        post_id: [2],
        date_created: new Date()
    },
    {
        content: 'this is a test comment',
        creator_id: [3],
        post_id: [1],
        date_created: new Date()
    },
    {
        content: 'this is a test comment',
        creator_id: [2],
        post_id: [1],
        date_created: new Date()
    }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
