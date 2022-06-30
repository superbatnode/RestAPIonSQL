module.exports = (sequelize, Sequelize) => {
  const PasswordResetToken = sequelize.define("PasswordResetToken", {
    user: {type:Sequelize.STRING},
    token: {type:Sequelize.STRING},
    OTP: {type:Sequelize.STRING},
  });
  return PasswordResetToken;
};
