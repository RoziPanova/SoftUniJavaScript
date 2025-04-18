function passWordValidator(password) {
  const patternFullPassword = new RegExp(/^(?=.*\d.*\d)[a-zA-Z\d]{6,10}$/);
  const patternLettersAndDigits = new RegExp(/^[a-zA-Z\d]+$/);
  const patternAtLeast2Digist = new RegExp(/(.*\d){2}/);

  const checkLength = password.length < 6 || password.length > 10;
  const checkContents = !patternLettersAndDigits.test(password);
  const checkNumCount = !patternAtLeast2Digist.test(password);

  if (patternFullPassword.test(password)) {
    console.log("Password is valid");
  } else {
    if (checkLength)
      console.log("Password must be between 6 and 10 characters");
    if (checkContents)
      console.log("Password must consist only of letters and digits");
    if (checkNumCount) console.log("Password must have at least 2 digits");
  }
}
passWordValidator("logIn");
