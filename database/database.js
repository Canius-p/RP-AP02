const { sequelize } = require("sequelize");

const env = process.env.NODE_ENV;
const config = require("/config/config");
const sequelize = new sequelize(config(env));

module.exports = sequelize;
