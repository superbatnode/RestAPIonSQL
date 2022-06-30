const saveAddress = require("../../model/crud/saveAddress");
const address = async (req, res, next) => {
  let data = {};
  data = req.body;
  data.username = req.data.username;
  try {
    const add = await saveAddress(data);
    console.log(add);
    res.json(add);
  } catch (e) {
    return next(e);
  }
};

module.exports = address;
