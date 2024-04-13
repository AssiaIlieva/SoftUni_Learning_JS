function treasureFinder(input) {
  let key = input[0].split(" ").map((x) => Number(x));
  let index = 1;
  let newString = input[index];

  while (newString !== "find") {
    let clue = newString.split("");
    let keyIndex = 0;
    let result = "";
    for (let i = 0; i < clue.length; i++) {
      let charCodeOfChar = clue[i].charCodeAt();
      let newCharCode = charCodeOfChar - key[keyIndex];
      let outputChar = String.fromCharCode(newCharCode);
      result += outputChar;
      keyIndex++;
      if (keyIndex === key.length) {
        keyIndex = 0;
      }
    }
    let treasure = result.split("&");
    let coordinatesArr = result.split("<");
    let lastElement = coordinatesArr[1];
    let coordinates = lastElement.substring(0, lastElement.length - 1);
    console.log(`Found ${treasure[1]} at ${coordinates}`);
    index++;
    newString = input[index];
  }
}
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
