function countStringOccurences(string, word) {
  let arr = string.split(" ");
  let counter = 0;

  for (let element of arr) {
    if (element === word) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurences("This is a word and it also is a sentence", "is");
