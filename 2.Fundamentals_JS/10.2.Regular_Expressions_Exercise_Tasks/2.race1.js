function race(array) {
  let racers = array.shift().split(", ");
  let raceResultsObj = {};
  racers.forEach((name) => {
    raceResultsObj[name] = 0;
  });
  let patternName = /[a-z]/gi;
  let patternDistance = /[\d]/g;
  let command = array.shift();

  while (command !== "end of race") {
    let matchName = command.match(patternName);
    let name = matchName.join("");
    let matchDistance = command.match(patternDistance);
    let distance = matchDistance
      .map(Number)
      .reduce((acc, value) => acc + value);
    if (name in raceResultsObj) {
      raceResultsObj[name] += distance;
    }
    command = array.shift();
  }
  let finalResults = Object.entries(raceResultsObj).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${finalResults[0][0]}`);
  console.log(`2nd place: ${finalResults[1][0]}`);
  console.log(`3rd place: ${finalResults[2][0]}`);
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
