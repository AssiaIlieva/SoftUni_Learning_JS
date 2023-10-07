function oddAndEvenSum(num) {
  let oddDigitsSum = 0;
  let evenDigitsSum = 0;
  let numberAsString = String(num);

  for(let char of numberAsString){
    let currentNumber = Number(char);

    if(currentNumber % 2 === 0){
      evenDigitsSum += currentNumber;
    }else{
      oddDigitsSum += currentNumber;
    }
  }
  console.log(`Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`);
}
oddAndEvenSum(3495892137259234);
