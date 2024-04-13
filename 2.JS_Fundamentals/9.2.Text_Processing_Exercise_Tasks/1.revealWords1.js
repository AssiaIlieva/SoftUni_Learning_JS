function revealWords(words, string) {
  let wordsArr = words.split(", ");
  let stringArr = string.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    for (let keyWord of wordsArr)
      if (
        stringArr[i].includes("*") &&
        stringArr[i].length === keyWord.length
      ) {
        stringArr[i] = keyWord;
      }
  }
  console.log(stringArr.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
