function magicMatrices(array) {
  let isMagic = true;
  let sum = array[0].reduce((acc, value) => acc + value);

  for (let i = 1; i < array.length; i++) {
    let newSum = array[i].reduce((acc, value) => acc + value);
    if (sum !== newSum) {
      isMagic = false;
      return isMagic;
    }
  }
  for (let j = 0; j < array.length; j++) {
    let newSum = 0;
    for (let k = 0; k < array.length; k++) {
      newSum += array[j][k];
    }
    if (sum !== newSum) {
      isMagic = false;
      return isMagic;
    }
  }
  return isMagic
}
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
