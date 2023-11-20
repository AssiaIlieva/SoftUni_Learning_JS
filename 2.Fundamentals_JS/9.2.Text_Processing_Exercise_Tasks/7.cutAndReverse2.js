function cutAndReverse(string) {
  let fistHalfResult = string
    .split("")
    .slice(0, string.length / 2)
    .reverse()
    .join("");
  let secondHalfResult = string
    .split("")
    .slice(string.length / 2)
    .reverse()
    .join("");
  console.log(fistHalfResult);
  console.log(secondHalfResult);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
