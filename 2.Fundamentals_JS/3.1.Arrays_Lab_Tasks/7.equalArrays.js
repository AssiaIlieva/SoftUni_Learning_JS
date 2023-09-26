function equalArrays(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let newElement = arr1[i];
    let arr1Index = Number(arr1[i]);
    let arr2Index = Number(arr2[i]);
    if (arr1Index == arr2Index) {
      sum += arr1Index;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(["10", "20", "30"], ["10", "20", "30"]);
