const CustomError = require("../../services/error/CustomError");
const Address = require("../index").address;
const deleteAddressRow = async (options) => {
  console.log(options);
  try {
    const result = await Address.destroy({
      where: options ,
    });
    return result;
  } catch (e) {
    throw CustomError.internalServerError(e);
  }
};
module.exports = deleteAddressRow;
