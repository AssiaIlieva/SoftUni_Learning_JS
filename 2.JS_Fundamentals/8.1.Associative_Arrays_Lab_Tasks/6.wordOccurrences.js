function wordOccurence(input) {
  let result = {};

  for (let element of input) {
    if (!result.hasOwnProperty(element)) {
      result[element] = 0;
    }
    result[element]++;
  }
  let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
  sortedResult.forEach((element) => {
    console.log(`${element[0]} -> ${element[1]} times`);
  });
}
wordOccurence([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
