function hardWords(input) {
  let [letter, wordsArr] = input;
  let letterWords = letter.split(" ");
  let targetWords = letterWords.filter((word) => word.includes("_"));

  for (let word of targetWords) {
    if (!word.endsWith("_")) {
      word = word.substring(0, word.length - 1);
    }
    let wordToChange = wordsArr.find(
      (wordToChange) => wordToChange.length == word.length
    );
    letter = letter.replace(word, wordToChange);
  }
  console.log(letter);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
