const { User } = require('../models');

const userdata = [
    {
        user_name: 'test',
        password: 'test',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
