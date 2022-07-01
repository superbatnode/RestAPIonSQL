const readUser = require("../../model/crud/readUser");
const CustomError = require("../../services/error/CustomError");

const getUser = async (req, res, next) => {
  const { username, email } = req.data;
  try{
    const data =  await readUser({ username, email })
    res.json(data)
  }catch(e){
    next(CustomError(e))
  }
};
module.exports = getUser;
