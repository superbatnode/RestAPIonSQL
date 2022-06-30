const deleteAddressRow = require("../../model/crud/deleteAddressRow");
const CustomError = require("../../services/error/CustomError");
const deleteUser = async (req, res, next) => {
  const addressTobeDeleted = {};
  addressTobeDeleted.id = Number(req.params.id);
  addressTobeDeleted.username = req.data.username;
  try {
    const result = await deleteAddressRow(addressTobeDeleted);

    result === 0
      ? res.json({
          Result: "Address Not found or not a valid req in the database",
        })
      : res.json({ Deleted: "done" });
  } catch (e) {
    console.log(e);
  }
};
module.exports = deleteUser;
