function processOddPositions(array) {
  let result = array
    .filter((x, i) => i % 2 === 1)
    .map((x) => x * 2)
    .reverse();
  console.log(result.join(' '));
}
processOddPositions([10, 15, 20, 25]);
