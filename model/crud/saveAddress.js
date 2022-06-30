const CustomError = require("../../services/error/CustomError");
const User = require("../index").users;
const Address = require("../index").address;
async function saveAddress(data) {
  try {
    if (await User.findOne({ where: { username: data.username } })) {
      const save = await Address.create(data);
      return save;
    } else throw CustomError.unauthorized("user not found");
  } catch (err) {
    throw CustomError.internalServerError(err);
  }
}
module.exports = saveAddress;
