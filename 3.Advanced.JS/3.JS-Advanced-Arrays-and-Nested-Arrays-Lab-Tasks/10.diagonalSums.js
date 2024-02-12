function diagonalSum(array) {
  let main = 0;
  let second = 0;
  for (let i = 0; i < array.length; i++) {
    main += array[i][i];
    second += array[i][array.length - i - 1];
  }
  console.log(main + ' ' + second);
}
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
