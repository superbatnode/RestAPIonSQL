const Sequelize = require("sequelize");
const { DB, USER, PASSWORD, HOST } = require("../config");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  operatorsAliases: false,
  logging: false,
});
module.exports = {sequelize, Sequelize}