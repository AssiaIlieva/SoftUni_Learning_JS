function pascalCaseSplitter(string) {
  let resultArray = [];
  let stringLength = string.length;
  let newWord = string[0];

  for (let i = 1; i < stringLength; i++) {
    let currChar = string[i];
    if (currChar.charCodeAt(0) >= 65 && currChar.charCodeAt(0) <= 90) {
      resultArray.push(newWord);
      newWord = currChar;
    } else {
      newWord += currChar;
    }
  }
  resultArray.push(newWord);
  console.log(resultArray.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
