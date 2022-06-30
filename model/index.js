const { DB, USER, PASSWORD, HOST, dialect, pool } = require("./db.config");
const Sequelize = require("sequelize");
const User = require("./user.model");
const Token = require("./token.model");
const Address = require("./address.model");
const PasswordResetToken = require("./passwordResetToken.model");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = User(sequelize, Sequelize);
db.token = Token(sequelize, Sequelize);
db.address = Address(sequelize, Sequelize);
db.passwordResetToken = PasswordResetToken(sequelize, Sequelize); 
db.users.hasMany(Address(sequelize, Sequelize), {
  foreignKey: "username",
  onDelete: 'CASCADE',
});
module.exports = db;
