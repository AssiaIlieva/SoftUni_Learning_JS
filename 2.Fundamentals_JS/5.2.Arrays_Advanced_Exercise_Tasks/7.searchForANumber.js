function searchForANumber(inputArrey, commandArray) {
  let numbersToTake = commandArray[0];
  let numbersToDelete = commandArray[1];
  let searchedNumber = commandArray[2];

  let newArray = inputArrey.slice(0, numbersToTake);
  newArray.splice(0, numbersToDelete);
  let searchedNumberCount = newArray.filter(
    (el) => el === searchedNumber
  ).length;

  console.log(`Number ${searchedNumber} occurs ${searchedNumberCount} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
