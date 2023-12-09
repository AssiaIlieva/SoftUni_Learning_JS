function passwordReset(input) {
  let password = input.shift();

  let command = input.shift();

  while (command !== "Done") {
    let [action, ...tokens] = command.split(" ");

    if (action === "TakeOdd") {
      password = password
        .split("")
        .filter((el, index) => index % 2 !== 0)
        .join("");
      console.log(password);
    } else if (action === "Cut") {
      let index = Number(tokens[0]);
      let lenght = Number(tokens[1]);
      let substring = password.slice(index, index + lenght);
      password = password.replace(substring, "");
      console.log(password);
    } else if (action === "Substitute") {
      let [substring, substitute] = tokens;
      if (password.includes(substring)) {
        password = password.split(substring).join(substitute);
        console.log(password);
      } else {
        console.log("Nothing to replace!");
      }
    }
    command = input.shift();
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
