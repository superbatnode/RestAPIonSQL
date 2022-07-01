const db = require("../index");
const User = db.users;
const bcrypt = require("bcrypt");
const { salt } = require("../../config");

async function saveUser(data, cb) {
  const emailExists = await User.findOne({ where: { email: data.email } });

  const usernameExists = await User.findOne({
    where: { username: data.username },
  });

  if (emailExists) {
    throw new Error("Email Already Exists");
  }

  if (usernameExists) {
    throw new Error("username is already taken");
  }

  data.password = await bcrypt.hash(data.password, salt);

  try {
    const save = await User.create(data);
    return save;
  } catch (err) {
    throw new Error(err);
  }
}
module.exports = saveUser;
