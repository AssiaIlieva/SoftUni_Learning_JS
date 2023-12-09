function secretChat(input) {
  let message = input.shift();
  let newLine = input.shift();

  while (newLine !== "Reveal") {
    let [action, ...tokens] = newLine.split(":|:");
    if (action === "InsertSpace") {
      let index = Number(tokens[0]);
      let leftHalf = message.slice(0, index);
      let rightHalf = message.slice(index);
      message = leftHalf + " " + rightHalf;
      console.log(message);
    } else if (action === "Reverse") {
      let substring = tokens[0];
      if (message.includes(substring)) {
        message = message.replace(substring, "");
        reversedSubstring = substring.split("").reverse().join("");
        message += reversedSubstring;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (action === "ChangeAll") {
      let substring = tokens[0];
      let replacment = tokens[1];
      message = message.split(substring).join(replacment);
      console.log(message);
    }
    newLine = input.shift();
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
