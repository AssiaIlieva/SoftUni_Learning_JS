function primeNumberChecker(number) {
  for (let i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      console.log("false");
      return;
    }
  }
  console.log("true");
}
primeNumberChecker(81);
