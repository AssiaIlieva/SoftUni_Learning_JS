function mirrorWords(input) {
  let text = input.shift();
  let pattern = /(\@|\#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;
  let pairs = text.match(pattern);
  if (!pairs) {
    console.log("No word pairs found!");
    console.log("No mirror words!");
    return;
  } else {
    console.log(`${pairs.length} word pairs found!`);
    let matches = text.matchAll(pattern);
    let mirrorWordsFound = [];

    for (let element of matches) {
      let reversed = element[3].split("").reverse().join("");
      if (element[2] === reversed) {
        let newWord = element[2] + " <=> " + element[3];
        mirrorWordsFound.push(newWord);
      }
    }
    if (mirrorWordsFound.length === 0) {
      console.log("No mirror words!");
    } else {
      console.log("The mirror words are:");
      console.log(mirrorWordsFound.join(", "));
    }
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
