const db = require("../index");
const User = db.users;
const bcrypt = require("bcrypt");
const { salt } = require("../../config");
async function saveUser(
  { username, email, firstName, lastName, password },
  cb
) {
  const emailExists = await User.findOne({ where: { email } });
  const usernameExists = await User.findOne({ where: { username } });

  if (emailExists) {
    return cb(new Error("This email is already registered"), null);
  }
  if (usernameExists) {
    return cb(new Error("username is already taken"), null);
  }
  password = await bcrypt.hash(password, salt);
  try {
    const save = await User.create({
      username,
      email,
      firstName,
      lastName,
      password,
    });
    return cb(null, save);
  } catch (err) {
    return cb(new Error("Internal Server Error"), null);
  }
}
module.exports = saveUser;
