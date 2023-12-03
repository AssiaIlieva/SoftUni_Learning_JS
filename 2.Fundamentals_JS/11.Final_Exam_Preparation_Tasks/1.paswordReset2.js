function passwordReset(input) {
  let password = input.shift();

  while (input[0] !== "Done") {
    let [command, ...tokens] = input.shift().split(" ");
    if (command === "TakeOdd") {
      let passwordArr = password.split("");
      password = passwordArr
        .filter((element, index) => index % 2 !== 0)
        .join("");
      console.log(password);
    } else if (command === "Cut") {
      let index = Number(tokens[0]);
      let length = Number(tokens[1]);
      let substring = password.substr(index, length);
      password = password.replace(substring, "");
      console.log(password);
    } else if (command === "Substitute") {
      let substring = tokens[0];
      let substitute = tokens[1];

      if (password.includes(substring)) {
        password = password.replace(new RegExp(substring, "g"), substitute);
        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
  console.log(`Your password is: ${password}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
