function matchDates([input]) {
  let pattern =
    /\b(?<date>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  let match = pattern.exec(input);

  while (match !== null) {
    let { date, month, year } = match.groups;
    console.log(`Day: ${date}, Month: ${month}, Year: ${year}`);

    match = pattern.exec(input);
  }
}
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
