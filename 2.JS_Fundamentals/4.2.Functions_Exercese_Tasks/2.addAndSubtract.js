function addAndSubtract(num1, num2, num3) {
  function add(a, b) {
    return a + b;
  }

  let result = add(num1, num2) - num3;

  console.log(result);
}
addAndSubtract(23, 6, 10);
