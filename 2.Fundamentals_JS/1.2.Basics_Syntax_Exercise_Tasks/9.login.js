function login(input) {
  let reversedPassword = input[0];
  let pasword = "";
  for (let i = reversedPassword.length - 1; i >= 0; i--) {
    pasword += reversedPassword[i];
  }
  let counter = 1;
  let guess = input[counter];
  while (guess !== pasword) {
    if (counter === 4) {
      console.log(`User ${reversedPassword} blocked!`);
      return;
    } else {
      console.log("Incorrect password. Try again.");
    }
    counter++;
    guess = input[counter];
  }
  console.log(`User ${reversedPassword} logged in.`);
}
login(["Acer", "login", "go", "let me in", "recA"]);
