function secretChat(input) {
  let message = input.shift();

  while (input[0] !== "Reveal") {
    let tokens = input.shift().split(":|:");
    let command = tokens[0];
    switch (command) {
      case "InsertSpace":
        let index = Number(tokens[1]);
        let firstHalf = message.slice(0, index);
        let secondHalf = message.slice(index);
        message = firstHalf + " " + secondHalf;
        break;
      case "Reverse":
        let substring = tokens[1];
        let substrIndex = message.indexOf(substring);
        if (substrIndex !== -1) {
          let leftHalf = message.slice(0, substrIndex);
          let rightHalf = message.slice(substrIndex + substring.length);
          message =
            leftHalf + rightHalf + substring.split("").reverse().join("");
        } else {
          console.log("error");
          continue;
        }
        break;
      case "ChangeAll":
        let oldString = tokens[1];
        let newString = tokens[2];
        let newMessage = message.split(oldString).join(newString);
        message = newMessage;
        break;
    }
    console.log(message);
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
