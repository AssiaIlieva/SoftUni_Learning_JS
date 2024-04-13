function race(input) {
  let names = input.shift().split(", ");
  let racers = {};
  for (const name of names) {
    racers[name] = 0;
  }
  for (const row of input) {
    let name = "";
    let distance = 0;
    let letters = row.match(/[A-Za-z]/g);
    if (letters) {
      name = letters.join("");
    }
    let digits = row.match(/\d/g);
    if (digits) {
      distance = digits.map(Number).reduce((acc, value) => acc + value, 0);
    }
    if (name in racers) {
      racers[name] += distance;
    }
  }
  let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${result[0][0]}`);
  console.log(`2nd place: ${result[1][0]}`);
  console.log(`3rd place: ${result[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
