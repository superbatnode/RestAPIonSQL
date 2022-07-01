const { sequelize, Sequelize } = require("./db.config");
const bcrypt = require("bcrypt");
const { salt } = require("../config");
const User = sequelize.define("User", {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      isAlphanumeric: true,
    },
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  verified: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

const getUser = async (option) => {
  try {
    return await User.findOne({
      where: option,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "verified"],
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("User not found");
  }
};

const getUserWithPassword = async (option) => {
  try {
    return await User.findOne({
      where: option,
    });
  } catch (e) {
    console.log(e);
    throw new Error("User not found");
  }
};

const saveUser = async (data) => {
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
    console.log(err);
    throw new Error("Unable to Save");
  }
};
const updatePassword = async (newPassword, email) => {
  try {
    return await User.update(
      { password: await bcrypt.hash(newPassword.toString(), salt) },
      {
        where: {
          email,
        },
      }
    );
  } catch (e) {
    console.log(e);
    throw new Error("can't update password");
  }
};

module.exports = {
  saveUser,
  getUser,
  updatePassword,
  getUserWithPassword,
};
