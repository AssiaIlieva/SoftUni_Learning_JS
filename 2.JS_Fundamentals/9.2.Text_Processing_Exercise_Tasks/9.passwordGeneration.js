function passwordGenerator(input) {
  let [string1, string2, word] = input;
  let letters = (string1 + string2).split("");
  let vowels = ["a", "o", "e", "i", "u"];
  let index = 0;
  for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      letters[i] = word[index].toUpperCase();
      index++;
      if (index === word.length) {
        index = 0;
      }
    }
  }
  console.log(`Your generated password is ${letters.reverse().join("")}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
