function equalNeighbours(array) {
  let count = 0;
  for (let row of array) {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        count += 1;
      }
    }
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == array[i + 1][j]) {
        count += 1;
      }
    }
  }
  console.log(count);
}
equalNeighbours([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
