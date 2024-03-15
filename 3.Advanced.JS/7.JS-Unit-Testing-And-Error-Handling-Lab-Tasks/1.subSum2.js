function subSum(numbers, start, end) {
  if (Array.isArray(numbers) == false) {
    return NaN;
  }
  if(start < 0){start = 0};
  if(end > numbers.length - 1){end = numbers.length -1};

  return numbers.slice(start, end +1)
                .map(x => Number(x))
                .reduce((a, b) => a + b, 0);
}
console.log(subSum([], 1, 2));
