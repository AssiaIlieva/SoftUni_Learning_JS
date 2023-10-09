function numberModification(input) {
  let inputAsString = String(input);

  function avarageOfDigits(string) {
    let sum = 0;
    for (let char of string) {
      let currentDigit = Number(char);
      sum += currentDigit;
    }
    let avarage = sum / string.length;
    return avarage;
  }

  while (avarageOfDigits(inputAsString) <= 5) {
    inputAsString += "9";
  }
  console.log(inputAsString);
}
numberModification(101);
