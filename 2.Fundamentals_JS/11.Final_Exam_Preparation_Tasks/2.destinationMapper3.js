function destinationMapper(text) {
  let pattern = /(\=|\/)(?<place>[A-Z][A-Za-z]{2,})\1/gm;
  let travelPoints = 0;
  let destinations = [];

  let matches = pattern.exec(text);

  while (matches !== null) {
    let newDestination = matches.groups.place;
    destinations.push(newDestination);
    travelPoints += newDestination.length;
    matches = pattern.exec(text);
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("ThisIs some InvalidInput");
