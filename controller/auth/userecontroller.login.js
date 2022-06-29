const isUserExists = require("../../model/crud/isUserExists");
const login = async(req,res,next)=>{
    const userExists = await isUserExists(req.body); 
     res.send(userExists);
}; 

module.exports = login; 