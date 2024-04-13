function wordsTracker(input) {
  let map = new Map();
  let wordsToCheck = input.shift().split(" ");

  wordsToCheck.forEach((element) => {
    map.set(element, 0);
  });

  for (let word of input) {
    if (wordsToCheck.includes(word)) {
      let currentValue = map.get(word);
      map.set(word, currentValue + 1);
    }
  }
  let sortedWords = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  for (let [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
