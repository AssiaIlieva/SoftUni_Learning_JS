function charectersInRange(char1, char2) {
  let code1 = char1.charCodeAt();
  let code2 = char2.charCodeAt();

  let smallerCode = Math.min(code1, code2);
  let greaterCode = Math.max(code1, code2);

  let result = [];

  for (let i = smallerCode + 1; i < greaterCode; i++) {
    let nextChar = String.fromCharCode(i);
    result.push(nextChar);
  }

  console.log(result.join(" "));
}
charectersInRange("#", ":");
