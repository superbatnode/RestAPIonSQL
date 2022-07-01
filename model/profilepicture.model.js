module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("Photo", {
      user: Sequelize.STRING,
      photoPath: Sequelize.STRING,
    });
    return Photo;
  };
  