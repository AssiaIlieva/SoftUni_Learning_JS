function stringSubstring(word, text) {
  let lowerCaseText = text.toLowerCase();
  let wordsArray = lowerCaseText.split(" ");

  for (let element of wordsArray) {
    if (element === word) {
      console.log(word);
      return;
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring("python", "JavaScript is the best programming language");
