const { verify } = require("jsonwebtoken");
const { REFSECRET } = require("../../config");

const ResetToken = require("..").passwordResetToken;
async function updatePassword(email , otp){
    const result = ResetToken.findOne({where:{email, otp}})
    if(!result)
    throw new Error("wrong otp");
    const token = await verify(result.token, REFSECRET)
/***********will start from here */
}