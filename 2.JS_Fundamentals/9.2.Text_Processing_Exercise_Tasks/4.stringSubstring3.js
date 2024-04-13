function stringSubstring(word, text) {
  let textArray = text.split(" ");
  let isNotFound = true;

  for (const element of textArray) {
    if (word.toLowerCase() === element.toLowerCase()) {
      isNotFound = false;
      console.log(element.toLowerCase());
      break;
    }
  }
  if (isNotFound) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
