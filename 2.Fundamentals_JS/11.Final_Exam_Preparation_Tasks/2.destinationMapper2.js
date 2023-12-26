function destinationMapper(input) {
  let regex = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
  let points = 0;
  let destination = [];

  let foundDestination = input.match(regex);

  if (foundDestination) {
    foundDestination.forEach((element) => {
      if (element[0] === element[element.length - 1]) {
        element = element.substring(1, element.length - 1);
        destination.push(element);
        points += element.length;
      }
    });
  }
  console.log(`Destinations: ${destination.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
