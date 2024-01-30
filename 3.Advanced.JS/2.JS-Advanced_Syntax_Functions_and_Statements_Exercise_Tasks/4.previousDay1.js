function previousDay(year, month, date) {
  let yesterday = new Date(year, month - 1, date - 1);
  console.log(
    `${yesterday.getFullYear()}-${
      yesterday.getMonth() + 1
    }-${yesterday.getDate()}`
  );
}
previousDay(2016, 9, 1);
previousDay(2015, 5, 10);
