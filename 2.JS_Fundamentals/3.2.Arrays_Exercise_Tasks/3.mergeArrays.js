function mergeArrays(arr1, arr2) {
  let arrayLength = arr1.length;
  let result = [];

  for (let i = 0; i < arrayLength; i++) {
    if (i % 2 == 0) {
      result[i] = Number(arr1[i]) + Number(arr2[i]);
    } else {
      result[i] = arr1[i] + arr2[i];
    }
  }
  console.log(result.join(" - "));
}
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
