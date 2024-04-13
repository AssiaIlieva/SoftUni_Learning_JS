function destinationMapper(input) {
  let pattern = /(?<=(=|\/))[A-Z][A-Za-z]{2,}(?=\1)/g;
  let travelPoints = 0;

  let match = input.match(pattern);
  if (match === null) {
    console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
  } else {
    for (let location of match) {
      let newPoints = location.length;
      travelPoints += newPoints;
    }
    let result = match.join(", ");
    console.log(`Destinations: ${result}`);
    console.log(`Travel Points: ${travelPoints}`);
  }
}
destinationMapper("ThisIs some InvalidInput");
