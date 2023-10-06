function simpleCalculator(num1, num2, operator) {
  let add = (num1, num2) => num1 + num2;
  let subtract = (num1, num2) => num1 - num2;
  let multiply = (num1, num2) => num1 * num2;
  let divide = (num1, num2) => num1 / num2;

  let result = 0;

  switch (operator) {
    case "add":
      result = add(num1, num2);
      console.log(result);
      return;
    case "subtract":
      result = subtract(num1, num2);
      console.log(result);
      return;
    case "multiply":
      result = multiply(num1, num2);
      console.log(result);
      return;
    case "divide":
      result = divide(num1, num2);
      console.log(result);
      return;
  }
}
simpleCalculator(50, 13, "subtract");
