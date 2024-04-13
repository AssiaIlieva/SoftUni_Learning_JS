function sumDigits(number) {
  let string = String(number);
  let stringLength = string.length;
  let sum = 0;

  for (let i = 0; i < stringLength; i++) {
    let currentDigit = Number(string[i]);
    sum += currentDigit;
  }
  console.log(sum);
}
sumDigits(245678);
