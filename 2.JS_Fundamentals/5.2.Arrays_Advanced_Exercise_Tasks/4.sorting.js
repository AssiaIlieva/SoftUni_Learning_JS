function sorting(input) {
  let sortedArr = input.sort((a, b) => b - a);
  let sortedArrLength = sortedArr.length;
  let result = [];

  for (let i = 0; i < sortedArrLength; i++) {
    let biggerNum = sortedArr.shift();
    let smallNum = sortedArr.pop();
    result.push(biggerNum);
    result.push(smallNum);
  }
  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
