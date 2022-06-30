const {
  verifyUser,
  generateJWT,
  generateRefreshToken,
} = require("../../services/userservices");

const login = async (req, res, next) => {
  const user = await verifyUser(req.body).catch(next);
  if (user) {
    const { username, email, varified } = user;
    res.json({
      access_token: await generateJWT({ username, email, varified }).catch(
        next
      ),
      refresh_token: await generateRefreshToken({
        username,
        email,
        type: "refresh token",
        ip: "127.0.0.0",
      }),
    });
  }
};

module.exports = login;
