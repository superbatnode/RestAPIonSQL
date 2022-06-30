module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define("Token", {
    user: Sequelize.STRING,
    refreshToken: Sequelize.STRING,
    createdByIP: Sequelize.STRING,
    revoked:Sequelize.DATE,
    revokedByIP:Sequelize.STRING,
    replacedByToken: Sequelize.STRING
  });
  return Token;
};
