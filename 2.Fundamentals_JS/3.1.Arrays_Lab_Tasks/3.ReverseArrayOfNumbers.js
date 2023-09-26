function reverseArrayOfNumbers(number, array) {
  let result = "";

  for (let i = number - 1; i >= 0; i--) {
    if (i == 0) {
      result += array[i];
    } else {
      result += array[i] + " ";
    }
  }
  console.log(result);
}
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
