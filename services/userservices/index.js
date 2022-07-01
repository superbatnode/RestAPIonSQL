const jwt = require("jsonwebtoken");
const { SECRET, REFSECRET } = require("../../config");
const bcrypt = require("bcrypt");
const CustomError = require("../error/CustomError");
const User = require("../../model").users;
module.exports = {
  generateJWT,
  generateRefreshToken,
  validateToken,
  verifyUser,
};

async function verifyUser({ username, password }) {
  const usernameExists = await User.findOne({ where: { username } });
  if (usernameExists) {
    const result = await bcrypt.compare(password, usernameExists.password);
    if (!result)
      throw CustomError.unauthorized("username or password is wrong");
    return usernameExists;
  }
  throw CustomError.unauthorized("User not found");
}

async function generateJWT(data, sec = SECRET, expiry = 60 * 60) {
  try {
    return await jwt.sign(data, sec, { expiresIn: expiry });
  } catch (e) {
    throw "can't generate the token";
  }
}
async function generateRefreshToken({ username, email, type, ip }) {
  const token = await generateJWT(
    { username, email, type, ip },
    REFSECRET,
    60 * 60 * 60
  );
  return token;
}

async function validateToken(token, key, req) {
  try {
    const data = await jwt.verify(token, key);
    req.data = data; 
    return req ; 
  } catch (e) {
    throw CustomError.unauthorized("Unauthorized user");
  }
}
