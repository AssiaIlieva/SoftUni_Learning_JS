function mathPower(number, exponent) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= number;
  }

  return result;
}
mathPower(2, 8);
