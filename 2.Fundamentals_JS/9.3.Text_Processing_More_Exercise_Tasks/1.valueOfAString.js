function valueOfAString(input) {
  let [string, command] = input;

  let sum = 0;
  let stringArr = string.split("");
  for (let char of stringArr) {
    if (command === "LOWERCASE") {
      if (char.toUpperCase() !== char) {
        sum += char.charCodeAt();
      }
    } else {
      if (char.toLowerCase() !== char) {
        sum += char.charCodeAt();
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfAString(["AC/DC", "UPPERCASE"]);
