function evenAndOddSubstraction(array) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (currentElement % 2 == 0) {
      evenSum += currentElement;
    } else {
      oddSum += currentElement;
    }
  }
  let result = evenSum - oddSum;
  console.log(result);
}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
