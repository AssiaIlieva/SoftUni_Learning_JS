function modernTimesOfHashTag(input) {
  let array = input.split(" ");
  for (let word of array) {
    if (word[0] === "#" && word.length > 1) {
      let wordArray = word.split('');
      wordArray.shift();
      let wordForPrint = "";
        for (let char of wordArray) {
            if (!isNaN(char)) {
            break;
            } else {
            wordForPrint += char;
            }
        }
      if (wordForPrint.length > 0) {
        console.log(wordForPrint);
      }
    }
  }
}
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
