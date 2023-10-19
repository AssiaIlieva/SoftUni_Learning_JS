function numbers(string) {
  let array = string.split(" ").map(Number);

  let avrg = Math.floor(array.reduce((a, b) => a + b, 0) / array.length);

  let topNums = array
    .filter((x) => x > avrg)
    .sort((a, b) => b - a)
    .slice(0, 5);

  if (topNums.length === 0) {
    console.log("No");
  } else {
    console.log(topNums.join(" "));
  }
}
numbers("10 20 30 40 50");
