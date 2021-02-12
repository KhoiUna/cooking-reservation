const { Sequelize } = require("sequelize");

const user = process.env.USER;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.DB_PORT;

module.exports = new Sequelize(database, user, password, {
  host: "localhost",
  dialect: "postgres",
  port: port,
  logging: false,
});
