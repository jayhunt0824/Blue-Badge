require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");
let calc = require("./controllers/calculatorcontroller");
let cors = require("cors");

sequelize.sync();
// sequelize.sync({ force: true });
app.use(cors());
app.use(require("./middleware/headers"));

//method to make sure tables inside of server are put onto the database if not there.

// app.use("/test", function(req, res){ //created a new endpoint
//     res.send("This is a message from the test endpoint on the server!");
// });

//app.use("/rob", function(req, res) {
//     res.send("My name is Rob and I am 35 years old.");
// });

//Have endpoint of journal/practice. This is for journal and practice is in journal controller.
// can use app.use but not as clean("/journal", require('./controllers/journalcontroller'));

app.use(express.json()); //allow to accept json into server and it convert as object in server
app.use("/user", user);

app.use(require("./middleware/validate-session"));
app.use("/calculator", calc);
app.use("/journal", journal);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});

//localhost:3000 is our location of server
//localhost:3000/test
