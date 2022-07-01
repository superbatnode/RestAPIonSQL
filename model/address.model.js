const { sequelize, Sequelize } = require("./db.config");
const Address = sequelize.define("Address", {
  fullAddress: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  pincode: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
});

const deleteAddress = async (id, username) => {
  try {
    const result = await Address.destroy({
      where: { id, username },
    });
    return result;
  } catch (e) {
    console.log(e);
    throw new Error("Unable to delete address ");
  }
};

const saveAddress = async (data) => {
  console.log("=============== ", data);
  try {
    const save = await Address.create(data);
    return save;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to save.");
  }
};

const getAllAddress = async (username) => {
  try {
    return await Address.findAll({
      where: { username },
      attributes: {
        exclude: ["updatedAt", "createdAt", "username", "id"],
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Unable to get all address");
  }
};

module.exports = {
  saveAddress,
  deleteAddress,
  getAllAddress
};
