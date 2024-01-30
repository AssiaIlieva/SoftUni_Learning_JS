function previousDay(year, month, date) {
  let pattern = `${year}/${month}/${date}`;
  let yesterday = new Date(pattern);
  yesterday.setDate(yesterday.getDate() - 1);

  console.log(
    `${yesterday.getFullYear()}-${
      yesterday.getMonth() + 1
    }-${yesterday.getDate()}`
  );
}
previousDay(2016, 9, 1);
previousDay(2015, 5, 10);
