const { REFSECRET, salt } = require("../config");
const { generateJWT } = require("../services/userservices");
const { sequelize, Sequelize } = require("./db.config");
const bcrypt = require("bcrypt");
const PasswordResetToken = sequelize.define("PasswordResetTokens", {
  email: { type: Sequelize.STRING },
  token: { type: Sequelize.STRING },
  OTP: { type: Sequelize.STRING },
});

const ResetPassword = async (email, otp) => {
  const jwtToken = await generateJWT(
    { email, reason: "Password reset" },
    REFSECRET,
    60 * 10
  );
  await PasswordResetToken.destroy({ where: { email } });
  try {
    const save = await PasswordResetToken.create({
      email: email,
      token: jwtToken,
      OTP: await bcrypt.hash(otp.toString(), salt),
    });
    return save;
  } catch (e) {
    console.log(e);
    throw new Error("couldn't generate the otp");
  }
};
const deleteResetToken = async (email) => {
  try {
    await PasswordResetToken.destroy({ where: { email } });
  } catch (e) {
    console.log(e);
    throw new Error("Unable to delete");
  }
};
const getResetToken = async (email) => {
  try {
    return await PasswordResetToken.findOne({ where: { email } });
  } catch (e) {
    console.log(e);
    throw new Error("Unable to fetch Reset Token");
  }
};
module.exports = { ResetPassword, deleteResetToken, getResetToken };
