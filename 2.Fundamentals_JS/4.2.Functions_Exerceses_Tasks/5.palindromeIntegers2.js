function palindromeIntegers(array) {
  for (let i = 0; i < array.length; i++) {
    let currentString = String(array[i]);
    let reversedElement = reverseString(currentString);
    console.log(currentString == reversedElement);
  }
  function reverseString(string) {
    let result = "";
    let stringLength = string.length;
    for (let i = stringLength - 1; i >= 0; i--) {
      let currentChar = string.charAt(i);
      result += currentChar;
    }
    return result;
  }
}
palindromeIntegers([32, 2, 232, 1010]);
