const User = require("../index").users;
const Address = require("../index").address;

async function getAllUserData(username) {
  const data = {};
  const getUser = await User.findOne({
    where: { username },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "verified"],
    },
  });
  if (!getUser) throw new Error("User not found");
  data.profile = getUser;
  const getAllAddress = await Address.findAll({
    where: { username },
    attributes: {
      exclude: ["updatedAt", "createdAt", "username", "id"],
    },
  });
  data.address = getAllAddress;
  return data;
}
module.exports = getAllUserData;
