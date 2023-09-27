function addAndSubstract(array) {
  let arrayLength = array.length;
  let sumArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] % 2 == 0) {
      sumArray += array[i];
      array[i] += i;
      sumNewArray += array[i];
    } else {
      sumArray += array[i];
      array[i] -= i;
      sumNewArray += array[i];
    }
  }
  console.log(array);
  console.log(sumArray);
  console.log(sumNewArray);
}
addAndSubstract([5, 15, 23, 56, 35]);
