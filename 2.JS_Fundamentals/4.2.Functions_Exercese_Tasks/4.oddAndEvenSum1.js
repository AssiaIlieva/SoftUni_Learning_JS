function oddAndEvenSum(num) {
  let oddDigitsSum = 0;
  let evenDigitsSum = 0;

  let fromNumToString = (num) => String(num);
  let fromStringToNum = (string) => Number(string);

  for (let i = 0; i < fromNumToString(num).length; i++) {
    let currentChar = fromNumToString(num).charAt(i);
    let currentDigit = fromStringToNum(currentChar);
    currentDigit % 2 === 0
      ? (evenDigitsSum += currentDigit)
      : (oddDigitsSum += currentDigit);
  }
  console.log(`Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`);
}
oddAndEvenSum(3495892137259234);
