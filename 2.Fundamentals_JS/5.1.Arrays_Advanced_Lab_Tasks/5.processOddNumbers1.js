function processOddNumbers(arr) {
  let oddIndexArr = arr.filter((x, i) => i % 2 !== 0);
  let doubleElements = oddIndexArr.map((x) => x * 2);
  let reversedArr = doubleElements.reverse();
  console.log(reversedArr.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
