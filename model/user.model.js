module.exports = (sequelize, Sequelize) => {
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
  return User;
};
