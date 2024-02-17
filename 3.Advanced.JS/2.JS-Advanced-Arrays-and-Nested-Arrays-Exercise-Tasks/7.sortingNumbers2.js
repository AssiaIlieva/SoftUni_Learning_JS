function sortingNumbers(array) {
  let result = [];
  array.sort((a, b) => a - b);
  while(array.length !== 0){
    result.push(array.shift());
    result.push(array.pop());
  }
 return result
}
sortingNumbers([22, 9, 63, 3, 4, 2, 19, 54, 11, 21, 18]);
