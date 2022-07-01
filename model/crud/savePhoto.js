const { photo } = require("..");
const fs = require("fs");
const Photo = require("..").photo;
async function savePhoto(username, fileName) {
  try {
    const oldPhotoPath = await photo.findOne({ where: { user: username } });
    if (oldPhotoPath) {
      await photo.destroy({ where: { user: username } });
      console.log(oldPhotoPath);
      fs.unlink(oldPhotoPath.photoPath, (err) => console.log(err));
    }

    const updatePhoto = await photo.update(
      { photoPath: fileName },
      { where: { user: username } }
    );
    if (updatePhoto == 0) {
      await photo.create({ photoPath: fileName, user: username });
    }
  } catch (e) {
    throw new Error(e);
  }
}
module.exports = savePhoto;
