const { sequelize, Sequelize } = require("./db.config");
const fs = require("fs");
const Photo = sequelize.define("Photo", {
  user: Sequelize.STRING,
  photoPath: Sequelize.STRING,
});

const savePhoto = async (username, fileName) => {
  try {
    const oldPhotoPath = await Photo.findOne({ where: { user: username } });
    if (oldPhotoPath) {
      await Photo.destroy({ where: { user: username } });
      fs.unlink(oldPhotoPath.photoPath, console.error);
    }
    const updatePhoto = await Photo.update(
      { photoPath: fileName },
      { where: { user: username } }
    );
    if (updatePhoto == 0) {
      await Photo.create({ photoPath: fileName, user: username });
    }
    return "Photo Saved"
  } catch (e) {
    throw new Error("unable to save photo");
  }
};

module.exports = savePhoto;
