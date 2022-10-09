

const { User } = require('../models');

const userdata = [
  {
    user_name: 'alesmonde0',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

