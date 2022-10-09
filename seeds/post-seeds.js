
const { Post } = require('../models');

const postdata = [
  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    creator: 1,
    location: "toronto",
    meetup_date: new Date(2023, 1, 20)   
  },
  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    creator: 2,
    location: "toronto",
    meetup_date: new Date(2023, 2, 18)   
  },
  {
    title: 'Lorem ipsum dolor sit.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
    creator: 3,
    location: "toronto",
    meetup_date: new Date(2023, 3, 15)   
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
