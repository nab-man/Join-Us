
const { Post } = require('../models');

const postdata = [
    {
        title: 'This is a test post',
        contents: 'this is a test contents',
        date_created: new Date(),
        creator: [1],
        location: "toronto",
        meetup_date: new Date()
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;