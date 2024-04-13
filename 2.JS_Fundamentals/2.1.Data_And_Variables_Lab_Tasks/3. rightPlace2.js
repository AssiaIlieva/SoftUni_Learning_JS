function rightPlace(string, char, result) {
  let newString = string.replace("_", char);
  let output = result === newString ? "Matched" : "Not Matched";
  console.log(output);
}
rightPlace("Str_ng", "i", "String");
