function censoredWords(string, word) {
  let newSimbol = "*";
  let censored = string.replace(word, newSimbol.repeat(word.length));
  while (censored.includes(word)) {
    censored = censored.replace(word, newSimbol.repeat(word.length));
  }
  console.log(censored);
}
censoredWords("A small sentence with some small words", "small");
