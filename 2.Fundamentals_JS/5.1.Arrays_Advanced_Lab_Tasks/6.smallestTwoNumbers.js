function smallestTwoNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let result = sorted.slice(0, 2);

  console.log(result.join(" "));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
