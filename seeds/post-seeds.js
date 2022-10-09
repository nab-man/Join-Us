
const { Post } = require('../models');

const postdata = [

  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    date_created: new Date(),
    creator: 1,
    location: "toronto",
    meetup_date: new Date()   
  },
  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    date_created: new Date(),
    creator: 2,
    location: "toronto",
    meetup_date: new Date()   
  },
  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    date_created: new Date(),
    creator: 3,
    location: "toronto",
    meetup_date: new Date()   
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

