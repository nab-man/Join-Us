const { User } = require('../models');

const userdata = [
    {
        user_name: 'alesmonde0',
        password: 'password123'
      },
      {
        user_name: 'jwilloughway1',
        password: 'password123'
      },
      {
        user_name: 'iboddam2',
        password: 'password123'
      },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
