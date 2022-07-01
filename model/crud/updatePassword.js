const { verify } = require("jsonwebtoken");
const { REFSECRET, salt } = require("../../config");
const User = require("..").users;
const ResetToken = require("..").passwordResetToken;
const bcrypt = require("bcrypt");
async function updatePassword(email, otp, newPassword) {
  const result = await ResetToken.findOne({ where: { email } });
  if (!result) throw new Error("Error in fetching data from databases");
  const checkpassword= await bcrypt.compare(otp.toString(), result.OTP); 
  console.log(result, otp);
  if(!checkpassword)
  throw new Error("Wrong Otp");

  try {
    const token = await verify(result.token, REFSECRET);
    const user = await User.update(
      { password: await bcrypt.hash(newPassword.toString(), salt) },
      {
        where: {
          email,
        },
      }
    );
    await ResetToken.destroy({ where: { email } });
    return user;
  } catch (e) {
    throw new Error("Error found in  ", e);
  }
}
module.exports = updatePassword;
