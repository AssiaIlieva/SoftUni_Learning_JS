function negativeAndPositiveNum(arr) {
  let result = [];

  for (let element of arr) {
    element = Number(element);
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }
  console.log(result.join("\n"));
}
negativeAndPositiveNum(["7", "-2", "8", "9"]);
