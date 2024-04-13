function nonDecreasingSubset(array) {
  let arrayLength = array.length;
  let maxValue = Number.MIN_SAFE_INTEGER;
  let resut = [];

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] >= maxValue) {
      resut.push(array[i]);
      maxValue = array[i];
    }
  }
  console.log(resut.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
