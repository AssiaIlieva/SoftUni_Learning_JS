function biggestElement(array) {
  let result = [];
  for (let el of array) {
    el.sort((a, b) => b - a);
    result.push(el[0]);
  }
  result.sort((a, b) => b - a);
  console.log(result[0]);
}
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
