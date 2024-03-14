function subSum(numbers, start, end) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }
  let startIndex = Math.max(0, start);
  let endIndex = Math.min(end, numbers.length - 1);

  let sumNumbers = numbers.slice(startIndex, endIndex + 1);

  let sum = sumNumbers.reduce((a, b) => a + Number(b), 0);
  return sum;
}
console.log(subSum([], 1, 2));
