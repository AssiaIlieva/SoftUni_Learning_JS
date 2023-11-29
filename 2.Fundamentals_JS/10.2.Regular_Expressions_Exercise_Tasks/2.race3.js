function race(input) {
  let athletes = input.shift().split(", ");
  let objAthletes = {};

  for (let name of athletes) {
    objAthletes[name] = 0;
  }
  let currentLine = input.shift();
  let letterPattern = /[A-Za-z]/g;
  let digitPattern = /\d/g;

  while (currentLine !== "end of race") {
    let currentName = currentLine.match(letterPattern).join("");
    let distance = currentLine.match(digitPattern);
    let currentDistance = 0;
    distance.map((el) => (currentDistance += Number(el)));
    currentLine = input.shift();
    if (objAthletes.hasOwnProperty(currentName)) {
      objAthletes[currentName] += currentDistance;
    }
  }
  let results = Object.entries(objAthletes).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${results[0][0]}`);
  console.log(`2nd place: ${results[1][0]}`);
  console.log(`3rd place: ${results[2][0]}`);
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
