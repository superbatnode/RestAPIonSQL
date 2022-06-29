const { DB, USER, PASSWORD, HOST } = require("../config");

module.exports = {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect:"mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 10000,
    idle: 0,
  },
};
