function bombNumbers(array, command) {
  let bomb = command[0];
  let bombPower = command[1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === bomb) {
      let start = Math.max(0, i - bombPower);
      let end = Math.min(array.length - 1, i + bombPower);

      array.splice(start, end - start + 1);
      i = 0;
    }
  }

  let result = 0;
  for (let num of array) {
    result += num;
  }
  console.log(result);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
