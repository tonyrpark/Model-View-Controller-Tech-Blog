const { Post } = require("../models");

const postData = [
  {
    title: "Test Post 1",
    content: "Test 1",
    user_id: 1,
  },
  {
    title: "Test Post 2",
    content: "Test 2",
    user_id: 2,
  },
  {
    title: "Test Post 3",
    content: "Test 3",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
