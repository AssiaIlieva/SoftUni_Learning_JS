function replaceRepeatingChars(string) {
  let result = "";
  let preChar = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== preChar) {
      result += string[i];
      preChar = string[i];
    }
  }
  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
