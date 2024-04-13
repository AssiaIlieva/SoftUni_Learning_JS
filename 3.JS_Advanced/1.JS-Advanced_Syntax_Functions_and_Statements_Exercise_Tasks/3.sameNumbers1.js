function sameNumbers(number) {
  let numberAsString = number.toString();
  let sum = 0;
  let firstDigit = numberAsString[0];
  let isSame = true;

  for (let i = 0; i < numberAsString.length; i++) {
    if (numberAsString[i] !== firstDigit) {
      isSame = false;
    }
    sum += Number(numberAsString[i]);
  }
  console.log(isSame);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
