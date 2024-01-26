function agregateElements(array) {
  function sum(array) {
    let arrLength = array.length;
    let sum = 0;
    for (let i = 0; i < arrLength; i++) {
      sum += array[i];
    }
    return sum;
  }
  function inverseValues(array) {
    let arrLength = array.length;
    let sum = 0;
    for (let i = 0; i < arrLength; i++) {
      sum += 1 / array[i];
    }
    return sum;
  }
  function concat(array) {
    let arrLength = array.length;
    let sum = "";
    for (let i = 0; i < arrLength; i++) {
      sum += array[i];
    }
    return sum;
  }
  console.log(sum(array));
  console.log(inverseValues(array));
  console.log(concat(array));
}
agregateElements([2, 4, 8, 16]);
