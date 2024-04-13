function amazingNumbers(number) {
  let numberAsString = String(number);
  let sum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }
  let result = String(sum).includes("9");

  console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(999);
