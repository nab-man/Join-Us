const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");
// const seedAttendance = require("./attendance-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedPosts();
  console.log("--------------");
  await seedComments();
  console.log("--------------");
//   await seedAttendance();
  console.log("--------------");

  process.exit(0);
};

seedAll();
