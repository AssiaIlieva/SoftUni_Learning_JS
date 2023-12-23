function matchDates([input]) {
  let pattern =
    /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  let match = input.matchAll(pattern);
  if (match !== null) {
    for (let element of match) {
      console.log(
        `Day: ${element.groups.day}, Month: ${element.groups.month}, Year: ${element.groups.year}`
      );
    }
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
