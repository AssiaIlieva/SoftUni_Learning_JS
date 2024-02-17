function sortingNumbers(array) {
  let result = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length / 2; i++) {
    let small = array[i];
    result.push(small);
    let big = array[array.length - 1 - i];
    result.push(big);
  }
  if(array.length % 2 !== 0){
    result.pop()
  }
 return result
}
sortingNumbers([22, 9, 63, 3, 4, 2, 19, 54, 11, 21, 18]);
