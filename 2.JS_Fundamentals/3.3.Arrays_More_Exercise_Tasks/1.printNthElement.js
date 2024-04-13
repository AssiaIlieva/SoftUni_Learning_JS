function printNthElement(array) {
  let step = Number(array[array.length - 1]);
  let output = [];
  for (let i = 0; i < array.length - 1; i += step) {
    output.push(array[i]);
  }
  console.log(output.join(" "));
}
printNthElement(["1", "2", "3", "4", "5", "6"]);
