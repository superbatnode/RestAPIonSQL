const { SECRET } = require("../config");
const CustomError = require("../services/error/CustomError");
const { validateToken } = require("../services/userservices");

async function auth(req, res, next) {
  if (!req.headers["authorization"]) return next(CustomError.unauthorized());
  const token = req.headers["authorization"].split(" ")[1];
  await validateToken(token, SECRET, req).catch(next);
  next();
}
module.exports = auth;
