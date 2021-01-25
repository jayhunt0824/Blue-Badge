//connects us to server

const Sequelize = require("sequelize"); //require means import it

// Option 1: Passing parameters separately
//create an instance of Sequelize for use in the module with the sequelize variable
const sequelize = new Sequelize("journal-walkthrough", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

//testing
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//export the module
module.exports = sequelize;
