function matchDates(input) {
  let pattern =
    /\b(?<date>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  while ((validDate = pattern.exec(input)) !== null) {
    let day = validDate.groups.date;
    let month = validDate.groups.month;
    let year = validDate.groups.year;
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
