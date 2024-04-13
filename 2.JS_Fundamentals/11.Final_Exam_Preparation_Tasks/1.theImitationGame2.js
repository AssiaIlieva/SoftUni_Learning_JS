function theImitationGame(input) {
  let message = input.shift();
  let command = input.shift();

  while (command !== "Decode") {
    let commandArr = command.split("|");
    let action = commandArr[0];
    if (action === "ChangeAll") {
      let substring = commandArr[1];
      let replacement = commandArr[2];
      while (message.includes(substring)) {
        message = message.replace(substring, replacement);
      }
    } else if (action === "Insert") {
      let index = Number(commandArr[1]);
      let char = commandArr[2];
      message = message.substring(0, index) + char + message.substring(index);
    } else if (action === "Move") {
      let index = Number(commandArr[1]);
      let charToBeMoved = message.slice(0, index);
      message = message.replace(charToBeMoved, "");
      message += charToBeMoved;
    }
    command = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
