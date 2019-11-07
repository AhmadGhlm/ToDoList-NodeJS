const Sequelize = require("sequelize");

module.exports = new Sequelize("todolist", "todolist", "123", {
  host: "localhost",
  dialect: "postgres"
});
