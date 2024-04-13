function thePianist(input) {
  let numOfPieses = Number(input[0]);
  let piecesObj = {};
  for (let i = 1; i <= numOfPieses; i++) {
    let [piece, composer, key] = input[i].split("|");
    piecesObj[piece] = { composer, key };
  }
  let index = numOfPieses + 1;
  let command = input[index];

  while (command !== "Stop") {
    let commandArr = command.split("|");
    let action = commandArr[0];

    if (action === "Add") {
      let newPiece = commandArr[1];
      if (piecesObj.hasOwnProperty(newPiece)) {
        console.log(`${newPiece} is already in the collection!`);
      } else {
        let composer = commandArr[2];
        let key = commandArr[3];
        piecesObj[newPiece] = { composer, key };
        console.log(
          `${newPiece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (action === "Remove") {
      let newPiece = commandArr[1];
      if (piecesObj.hasOwnProperty(newPiece)) {
        delete piecesObj[newPiece];
        console.log(`Successfully removed ${newPiece}!`);
      } else {
        console.log(
          `Invalid operation! ${newPiece} does not exist in the collection.`
        );
      }
    } else if (action === "ChangeKey") {
      let newPiece = commandArr[1];
      let newKey = commandArr[2];
      if (piecesObj.hasOwnProperty(newPiece)) {
        piecesObj[newPiece]["key"] = newKey;
        console.log(`Changed the key of ${newPiece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${newPiece} does not exist in the collection.`
        );
      }
    }
    index++;
    command = input[index];
  }
  let result = Object.entries(piecesObj);
  for (let el of result) {
    let piece = el[0];
    let [composer, key] = Object.entries(el[1]);
    console.log(`${piece} -> Composer: ${composer[1]}, Key: ${key[1]}`);
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
