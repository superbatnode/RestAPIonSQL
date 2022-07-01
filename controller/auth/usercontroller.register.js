const saveUser = require("../../model/crud/saveUser");
const register = async (req, res, next) => {
  try{
    const save = await saveUser(req.body); 
    res.json(save); 
  }catch(e){
    return next(e);
  }
};
module.exports = register;
