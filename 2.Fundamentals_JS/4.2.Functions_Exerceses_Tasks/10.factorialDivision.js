function factorialDivision(num1, num2) {
  let result = findFactorial(num1) / findFactorial(num2);
  console.log(result.toFixed(2));

  function findFactorial(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
factorialDivision(5, 2);
