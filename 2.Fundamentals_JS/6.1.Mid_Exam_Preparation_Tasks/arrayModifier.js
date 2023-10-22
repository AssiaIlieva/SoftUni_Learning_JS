function arrayModifier(input) {
  let numbers = input.shift().split(" ").map(Number);
  let inputLength = input.length;

  for (let i = 0; i < inputLength; i++) {
    let currentCommand = input[i].split(" ");
    let action = currentCommand[0];

    switch (action) {
      case "swap":
        swap(currentCommand[1], currentCommand[2]);
        break;
      case "multiply":
        multiply(currentCommand[1], currentCommand[2]);
        break;
      case "decrease":
        numbers = numbers.map((x) => x - 1);
        break;
      case "end":
        console.log(numbers.join(", "));
        break;
    }
  }
  function swap(num1Index, num2Index) {
    num1Index = Number(num1Index);
    num2Index = Number(num2Index);
    let num1 = numbers[num1Index];
    numbers[num1Index] = numbers[num2Index];
    numbers[num2Index] = num1;
  }
  function multiply(num1Index, num2Index) {
    num1Index = Number(num1Index);
    num2Index = Number(num2Index);
    let product = numbers[num1Index] * numbers[num2Index];
    numbers[num1Index] = product;
  }
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
