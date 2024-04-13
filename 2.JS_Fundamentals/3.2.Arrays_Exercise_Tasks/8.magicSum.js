function magicSum(array, number) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstElement = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondElement = array[j];
      if (firstElement + secondElement == number) {
        console.log(`${firstElement} ${secondElement}`);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
