function revealWords(words, string) {
  let targetWords = words.split(", ");

  for (let word of targetWords) {
    let starsCount = word.length;
    let starsTemplate = "*".repeat(starsCount);
    string = string.replace(starsTemplate, word);
  }
  console.log(string);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
