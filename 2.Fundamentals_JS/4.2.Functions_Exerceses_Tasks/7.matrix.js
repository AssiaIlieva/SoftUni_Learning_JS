function matrix(number) {
  let numberAsString = String(number) + " ";
  let row = numberAsString.repeat(number);

  for (let i = 1; i <= number; i++) {
    console.log(row);
  }
}
matrix(3);
