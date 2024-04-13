function distingArray(input) {
  let result = [];
  for (let el of input) {
    result.includes(el) ? result : result.push(el);
  }
  console.log(result.join(" "));
}
distingArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
