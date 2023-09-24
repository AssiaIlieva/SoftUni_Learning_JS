function rightPlace(stringOne, char, stringTwo) {
  let result = "";
  let stringOneLength = stringOne.length;

  for (let i = 0; i < stringOneLength; i++) {
    let newElement = stringOne[i];

    if (newElement == "_") {
      result += char;
    } else {
      result += newElement;
    }
  }
  if (stringTwo == result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "i", "String");
