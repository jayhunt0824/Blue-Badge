/* *************************
 *** USER SIGNUP ***
 ************************** */
function userSignUp() {
  //   console.log("userSignUp Function Called");
  let userEmail = document.getElementById("emailSignup").value;
  let userPass = document.getElementById("pwdSignup").value;
  let newUserData = { user: { email: userEmail, password: userPass } };
  console.log(
    `NEWUSERDATA ==> ${newUserData.user.email} ${newUserData.user.password}`
  );
}

/* 
 *** USER LOGIN ***
 ************************** */
function userLogin() {
*************************  console.log("userLogin Function Called");
}

/* *************************
 *** USER LOGOUT ***
 ************************** */
function userLogout() {
  console.log("userLogout Function Called");
}

/* *************************
 *** TOKEN CHECKER FUNCTION ***
 ************************** */
function tokenChecker() {
  console.log("tokenChecker Function Called");
}
tokenChecker();
