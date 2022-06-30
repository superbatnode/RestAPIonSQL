const { REFSECRET, salt } = require("../../config");
const { generateJWT } = require("../../services/userservices");
const bcrypt = require("bcrypt");
const User = require("..").users;

const PasswordModel = require("..").passwordResetToken;
function OTP(min = 1000000, max = 1999999) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function verifyEmail(email) {
    console.log(salt )
  const result = await User.findOne({ where: { email } });
  if (!result) throw new Error("User is invalid");
  //save database token otp and username
  const otp = OTP();
  const jwtToken =await generateJWT(
    { email: result.email, reason: "Password reset" },
    REFSECRET,
    60 * 10
  );
  const save = await PasswordModel.create({
    user: result.username,
    token: jwtToken,
    OTP: await bcrypt.hash(otp.toString(), salt),
  });
  return { save, otp };
}
module.exports = verifyEmail;
