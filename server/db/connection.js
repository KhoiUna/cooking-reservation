const { Sequelize } = require("sequelize");

//For local
// const user = process.env.USER;
// const database = process.env.DATABASE;
// const password = process.env.PASSWORD;
// const port = process.env.DB_PORT;

// module.exports = new Sequelize(database, user, password, {
//   host: "localhost",
//   dialect: "postgres",
//   port: port,
//   logging: false,
// });

//For Heroku Postgres
module.exports = new Sequelize(process.env.DATABASE_URL, {
  protocol: "postgres",
  dialect: "postgres",
  logging: false,
  host: process.env.DB_HOST,
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
