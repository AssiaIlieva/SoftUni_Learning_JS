function shootForWin(input) {
  let targets = input[0].split(" ").map(Number);
  let index = 1;
  let command = input[index];

  while (command !== "End") {
    let arrIndex = Number(command);
    if (arrIndex >= 0 && arrIndex < targets.length) {
      let currentValue = targets[arrIndex];
      if (currentValue !== -1) {
        for (let i = 0; i < targets.length; i++) {
          let element = targets[i];
          if (element === -1 || i === arrIndex) {
            continue;
          }
          if (element > currentValue) {
            targets[i] -= currentValue;
          } else {
            targets[i] += currentValue;
          }
        }
        targets[arrIndex] = -1;
      }
    }
    index++;
    command = input[index];
  }
  let targetsShot = targets.filter((el) => el == -1);

  let count = targetsShot.length;
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
