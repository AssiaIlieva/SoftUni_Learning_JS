function cutAndReverse(string) {
  let stringHalf = string.length / 2;
  let firstHalf = string.substring(0, stringHalf);
  let secondHalf = string.substring(stringHalf);
  let fistHalfResult = firstHalf.split("").reverse().join("");
  let secondHalfResult = secondHalf.split("").reverse().join("");
  console.log(fistHalfResult);
  console.log(secondHalfResult);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
