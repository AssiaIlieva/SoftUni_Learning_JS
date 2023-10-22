function equalNeighbors(input) {
  let counter = 0;

  for (let i = 0; i < input.length - 1; i++) {
    let firstRaw = input[i];
    let secondRaw = input[i + 1];
    for (let j = 0; j < firstRaw.length; j++) {
      if (firstRaw[j] === secondRaw[j]) {
        counter++;
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    let newRaw = input[i];
    for (let j = 0; j < newRaw.length - 1; j++) {
      if (newRaw[j] === newRaw[j + 1]) {
        counter++;
      }
    }
  }
  console.log(counter);
}
equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
