function secretChat(input) {
  let secretMessage = input.shift();

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(":|:");
    let command = tokens[0];
    let values = tokens.slice(1);

    switch (command) {
      case "ChangeAll": {
        let substring = values[0];
        let replacement = values[1];
        while (secretMessage.includes(substring)) {
          secretMessage = secretMessage.replace(substring, replacement);
        }
        console.log(secretMessage);
        break;
      }
      case "Reverse": {
        let substring = values[0];
        if (secretMessage.includes(substring)) {
          secretMessage = secretMessage.replace(substring, "");
          let reversedStr = reverseStr(substring);
          secretMessage += reversedStr;
          console.log(secretMessage);
        } else {
          console.log("error");
        }
        break;
      }
      case "InsertSpace": {
        let index = Number(values[0]);
        let leftSide = secretMessage.substring(0, index);
        let rightSide = secretMessage.substring(index);
        secretMessage = leftSide + " " + rightSide;
        console.log(secretMessage);
        break;
      }
      case "Reveal": {
        console.log(`You have a new text message: ${secretMessage}`);
        break;
      }
    }

    function reverseStr(text) {
      return text.split("").reverse().join("");
    }
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
