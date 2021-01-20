//  //Each one of these challenges will test your knowledge to see
// if you can match up what your server should have in it based on
// what is typed into the body section of Postman.
// we are assuming that your function looks like the following
// router.post("/", function(req,res){
// })
// Challenge 1
// On the server how would you access the username and store it in
// a variable?
const postmanBody1 = {
  user: {
    username: "myTestEmail@test.com",
    password: "pass1234",
  },
};
// Challenge 2
// On the server how would you access the username and store it in
// a variable?
const postmanBody2 = {
  username: "myTestEmail@test.com",
  password: "pass1234",
};
// Challenge 3
// On the server how would you access the weight and store it in
// a variable?
const postmanBody3 = {
  info: {
    name: "John",
    age: 20,
    address: "1234 Golden St",
  },
  bio: {
    temp: 99.5,
    weight: 176,
  },
  reasonForVisit: "Was complaining about a possible code break",
};
// Challenge 4
// On the server how would you access the reasonForVisit and store it in
// a variable?
const postmanBody4 = {
  info: {
    name: "John",
    age: 20,
    address: "1234 Golden St",
  },
  bio: {
    temp: 99.5,
    weight: 176,
  },
  reasonForVisit: "Was complaining about a possible code break",
};
// Challenge 5
// On the server how would you access the address and store it in
// a variable?
const postmanBody5 = {
  info: {
    name: "John",
    age: 20,
    address: "1234 Golden St",
  },
  bio: {
    temp: 99.5,
    weight: 176,
  },
  reasonForVisit: "Was complaining about a possible code break",
};
function checkMyServerSetup(challengeNumber, serverRequest) {
  let key = "";
  switch (challengeNumber) {
    case 1:
      key = "cmVxLmJvZHkudXNlci51c2VybmFtZQ==";
      break;
    case 2:
      key = "cmVxLmJvZHkudXNlcm5hbWU=";
      break;
    case 3:
      key = "cmVxLmJvZHkuYmlvLndlaWdodA==";
      break;
    case 4:
      key = "cmVxLmJvZHkucmVhc29uRm9yVmlzaXQ=";
      break;
    case 5:
      key = "cmVxLmJvZHkuaW5mby5hZGRyZXNz";
      break;
    default:
      alert("not found");
  }
  let matches = key === btoa(serverRequest);
  console.log("The match is " + matches);
}
/// Instructions - read the challenge above and come back down here
//  to test your skills..
// 1. Type in your request object
const object = "req.body.user.username";
// 2. Type in the challenge number you are on
const currentChallenge = 1;
// 3. View the console or run the javascript in VS Code to test your
// object
//do not edit
checkMyServerSetup(currentChallenge, object);
// put your answers down here
// Make your own and share if you want to generate your own key:
//https://docs.google.com/spreadsheets/d/14kufTAifj7a9G_BnRHCqlh9PeLLO_DoFtxTGBuhAFAY/edit?usp=sharing
