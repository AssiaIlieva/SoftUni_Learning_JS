function oddOccurences(input) {
  let inputArray = input.split(" ").map((el) => el.toLowerCase());
  let wordObject = {};
  for (let element of inputArray) {
    if (!wordObject.hasOwnProperty(element)) {
      wordObject[element] = 0;
    }
    wordObject[element]++;
  }
  let arrayOfOddElements = Object.entries(wordObject)
    .filter((kvp) => kvp[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1]);

  let result = "";
  arrayOfOddElements.forEach((element) => {
    result += element[0] + " ";
  });
  console.log(result);
}
oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
