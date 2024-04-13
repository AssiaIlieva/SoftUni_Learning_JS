function mirrorWords(arr) {
  let regex = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
  let count = 0;
  let results = [];
  for (const text of arr) {
    let matches = text.matchAll(regex);
    for (const match of matches) {
      count++;
      let leftWord = match.groups.word1;
      let rightWord = match.groups.word2;
      let reversedRightWord = reverseStr(rightWord);
      if (leftWord === reversedRightWord) {
        let mirrorWord = leftWord + " <=> " + rightWord;
        results.push(mirrorWord);
      }
    }
  }
  if (count === 0) {
    console.log(`No word pairs found!\nNo mirror words!`);
  } else {
    console.log(`${count} word pairs found!`);
    results.length === 0
      ? console.log("No mirror words!")
      : console.log(`The mirror words are: \n${results.join(", ")}`);
  }
  function reverseStr(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversed += text[i];
    }
    return reversed;
  }
}
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
