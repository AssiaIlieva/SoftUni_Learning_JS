function specialNumbers(lastNumber) {
  for (let i = 1; i <= lastNumber; i++) {
    let newNumber = i;
    let sum = 0;
    while (newNumber >= 1) {
      let lastDigit = newNumber % 10;
      sum += lastDigit;
      newNumber -= lastDigit;
      newNumber = parseInt(newNumber / 10);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);
