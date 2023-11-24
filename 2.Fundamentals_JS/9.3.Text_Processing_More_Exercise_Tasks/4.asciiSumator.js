function asciiSumator(input) {
  let startValue = input[0].charCodeAt();
  let endValue = input[1].charCodeAt();
  if (startValue > endValue) {
    startValue = endValue;
    endValue = input[0].charCodeAt();
  }
  let stringArr = input[2].split("");
  let sum = 0;
  for (let element of stringArr) {
    let elValue = element.charCodeAt();
    if (elValue > startValue && elValue < endValue) {
      sum += elValue;
    }
  }
  console.log(sum);
}
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
