const saveUser = require("../../model/crud/saveUser");
const register = async (req, res, next) => {
  await saveUser(req.body, (err, data) => {
    if (err) return next(err);
    else res.send(data );
  }).catch(e=>next(e));
};
module.exports = register;
