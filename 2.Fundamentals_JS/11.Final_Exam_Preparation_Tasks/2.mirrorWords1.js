function mirrorWords([string]) {
  let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let resultArr = [];
  let counter = 0;

  let match = pattern.exec(string);

  if (match === null) {
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`);
  } else {
    while (match) {
      console.log(match);
      let firstPart = match[2];
      let secondPart = match[3];
      counter++;

      if (firstPart === secondPart.split("").reverse().join("")) {
        let newElement = firstPart + " <=> " + secondPart;
        resultArr.push(newElement);
      }
      match = pattern.exec(string);
    }
    console.log(`${counter} word pairs found!`);
    if (resultArr.length === 0) {
      console.log(`No mirror words!`);
    } else {
      console.log(`The mirror words are:`);
      console.log(resultArr.join(", "));
    }
  }
}
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
