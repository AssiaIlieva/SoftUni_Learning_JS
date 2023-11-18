function replaceRepeatingChars(string) {
  let result = string[0];
  let stringLength = string.length;

  for (let i = 1; i < stringLength; i++) {
    let currChar = string[i];
    let prevChar = string[i - 1];
    if (prevChar !== currChar) {
      result += currChar;
    }
  }
  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
