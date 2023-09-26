function condenseArrayToNumber(array) {
  while (array.length > 1) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
      newArray[i] = array[i] + array[i + 1];
    }
    array = newArray;
  }
  console.log(array.toString());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
