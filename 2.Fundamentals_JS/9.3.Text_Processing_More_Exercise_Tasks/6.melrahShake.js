function melrahShake(input) {
  let [text, pattern] = input;

  while (pattern.length > 0) {
    let firstPatternZeroIndx = text.indexOf(pattern);
    let firstPatternLastIndx = firstPatternZeroIndx + pattern.length - 1;
    let lastPatternZeroIndx = text.lastIndexOf(pattern);
    let lastPatternLastIndx = lastPatternZeroIndx + pattern.length - 1;
    if (
      firstPatternZeroIndx !== lastPatternZeroIndx &&
      firstPatternLastIndx > -1
    ) {
      let textFisrtPart = text.substring(0, firstPatternZeroIndx);
      let textSecondPart = text.substring(
        firstPatternLastIndx + 1,
        lastPatternZeroIndx
      );
      let textThirdPart = text.substring(lastPatternLastIndx + 1);
      text = textFisrtPart + textSecondPart + textThirdPart;
      let toBeRemovedArr = pattern.split("");
      let elRemoved = toBeRemovedArr.splice(pattern.length / 2, 1);
      pattern = toBeRemovedArr.join("");
      console.log("Shaked it.");
    } else {
      break;
    }
  }
  console.log("No shake.");
  console.log(text);
}
melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);
