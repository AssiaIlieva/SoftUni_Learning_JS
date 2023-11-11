function censoredWords(string, word) {
  let newSimbol = "*";

  while (string.includes(word)) {
    string = string.replace(word, newSimbol.repeat(word.length));
  }
  console.log(string);
}
censoredWords("A small sentence with some small words", "small");
