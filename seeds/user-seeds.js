const { User } = require("../models");

const userData = [
  {
    username: "User1",
    password: "pass1",
  },
  {
    username: "User2",
    password: "pass2",
  },
  {
    username: "User3",
    password: "pass3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
