let express = require("express"); //bring in express engine
let router = express.Router(); //bring in router

//bring in database to interact with model
let sequelize = require("../db");
let user = sequelize.import("../models/user.js"); //create a user instance for model sequelizer to use
let jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const router = require("express").Router(); //chaining to make shorter
// const User = require("../db").import("../models/user.js");
router.post("/create", function (req, res) {
  user
    .create({
      email: req.body.user.email, //"user@email.com", (placeholders for dynamic)
      password: bcrypt.hashSync(req.body.user.password, 13), //"Password1234",
    })
    .then(function createSuccess(user) {
      let token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: 60 * 60 * 24,
        }
      );
      res.json({
        user: user,
        message: "user successfully created",
        sessionToken: token,
      });
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});

//create a new endpoint: /login
//the endpoint is going to be a post request
//build a query statement(hardcode in a user's email that exists in your database
//use findOne
//let sequelize return a success
//if we find one return user info and if user doesn't exist return "user does not exist"
router.post("/login", function (req, res) {
  user
    .findOne({
      where: {
        email: req.body.user.email,
      },
    })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });

              res.status(200).json({
                user: user,
                message: "User successfully logged in!",
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: "Login Failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "user does not exist" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
