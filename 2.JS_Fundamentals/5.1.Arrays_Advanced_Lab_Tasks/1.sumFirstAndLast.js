function sumFirstAndLast(arr) {
  arr = arr.map(Number);
  console.log(arr.pop() + arr.shift());
}
sumFirstAndLast(["5", "10"]);
