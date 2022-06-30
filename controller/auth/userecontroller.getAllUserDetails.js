const getAllUserData = require("../../model/crud/getAllUserData");

const getAllUserDetails = async(req, res, next)=>{
    const data = await getAllUserData(req.data.username); 
    res.json(data);
}; 

module.exports = getAllUserDetails;