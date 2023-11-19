function pascalCaseSplitter(string) {
  let resultArray = [];
  let index = 0;

  for (let i = 1; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      resultArray.push(string.substring(index, i));
      index = i;
    }
  }
  resultArray.push(string.substring(index));
  console.log(resultArray.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
