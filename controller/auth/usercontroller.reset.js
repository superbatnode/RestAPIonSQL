const updatePassword = require("../../model/crud/updatePassword");
const CustomError = require("../../services/error/CustomError");

const reset  = async (req, res, next)=>{
    const {email, otp, newPassword} = req.body;
    try{
       const result=  await updatePassword(email, otp, newPassword); 
        res.json(result);
    }catch(e){
        console.log(e);
        return next(CustomError.internalServerError(e.message));
    }
}
    
module.exports = reset;     