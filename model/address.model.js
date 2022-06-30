module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("Address", {
    fullAddress: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    pincode: {
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    }
  });
  return Address;
};
