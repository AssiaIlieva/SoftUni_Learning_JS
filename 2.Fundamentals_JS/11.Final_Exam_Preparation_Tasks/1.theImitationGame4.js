function theImitationGame(input) {
  let message = input.shift();

  let newLine = input.shift();
  while (newLine !== "Decode") {
    let [action, ...tokens] = newLine.split("|");
    if (action === "ChangeAll") {
      let substring = tokens[0];
      let replacement = tokens[1];
      message = message.split(substring).join(replacement);
    } else if (action === "Insert") {
      let index = Number(tokens[0]);
      let value = tokens[1];
      let leftHalf = message.slice(0, index);
      let rightHalf = message.slice(index);
      message = leftHalf + value + rightHalf;
    } else if (action === "Move") {
      let numOfLetters = Number(tokens[0]);
      let rightHalf = message.slice(0, numOfLetters);
      message = message.replace(rightHalf, "") + rightHalf;
    }
    newLine = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
