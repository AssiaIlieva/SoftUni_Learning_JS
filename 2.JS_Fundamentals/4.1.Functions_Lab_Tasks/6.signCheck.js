function signCheck(num1, num2, num3) {
  let array = [num1, num2, num3];
  let negativeNumbers = array.filter((x) => x < 0);

  if (negativeNumbers.length % 2 !== 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
signCheck(-6, -12, 14);
