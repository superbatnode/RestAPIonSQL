const db = require("../index");
const bcrypt = require("bcrypt");
const { salt } = require("../../config");
const User = db.users;
const isUserExists = async ({ username, password }) => {
  const usernameExists = await User.findOne({ where: { username } });
  console.log(usernameExists.password);
  if (usernameExists) {
    const result = await bcrypt.compare(password, usernameExists.password);

    return result;
  }
  return false;
};
module.exports = isUserExists;
