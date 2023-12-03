function activationKeys(input) {
  let key = input.shift();
  input.pop();
  for (const command of input) {
    let [action, ...tokens] = command.split(">>>");
    if (action === "Slice") {
      let startInx = Number(tokens[0]);
      let endInx = Number(tokens[1]);
      let leftHalf = key.slice(0, startInx);
      let rightHalf = key.slice(endInx);
      key = leftHalf + rightHalf;
      console.log(key);
    } else if (action === "Flip") {
      let toCase = tokens[0];
      let startInx = Number(tokens[1]);
      let endInx = Number(tokens[2]);
      let substring = key.slice(startInx, endInx);
      let leftHalf = key.slice(0, startInx);
      let rightHalf = key.slice(endInx);
      toCase === "Upper"
        ? (substring = substring.toUpperCase())
        : (substring = substring.toLowerCase());
      key = leftHalf + substring + rightHalf;
      console.log(key);
    } else if (action === "Contains") {
      let substring = tokens[0];
      key.includes(`${substring}`)
        ? console.log(`${key} contains ${substring}`)
        : console.log(`Substring not found!`);
    }
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
