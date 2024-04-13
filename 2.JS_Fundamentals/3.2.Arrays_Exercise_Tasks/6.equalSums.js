function equalSums(array) {
  if (array.length == 1) {
    console.log(0);
    return;
  }
  let isEqual = false;

  for (let i = 1; i < array.length - 1; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i + 1; j < array.length; j++) {
      rightSum += array[j];
    }
    for (let k = i - 1; k >= 0; k--) {
      leftSum += array[k];
    }
    if (leftSum == rightSum) {
      isEqual = true;
      console.log(i);
    }
  }
  if (!isEqual) {
    console.log("no");
  }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
