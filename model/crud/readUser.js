const CustomError = require("../../services/error/CustomError");
const db = require("../index");
const User = db.users;
const readUser = async (option) => {
  try {
    return await User.findOne({
      where: option,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "verified"],
      },
    });
  } catch (e) {
    throw CustomError.unauthorized("User not found");
  }
};
module.exports = readUser;
