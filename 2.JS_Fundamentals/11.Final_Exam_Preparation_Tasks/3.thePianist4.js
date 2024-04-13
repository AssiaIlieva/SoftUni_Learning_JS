function pianist(input) {
  let n = Number(input.shift());
  let collection = {};

  for (let i = 0; i < n; i++) {
    let [name, composer, key] = input.shift().split("|");
    collection[name] = { composer, key };
  }
  let command = input.shift();

  while (command !== "Stop") {
    let [action, name, ...tokens] = command.split("|");
    if (action === "Add") {
      if (name in collection) {
        console.log(`${name} is already in the collection!`);
      } else {
        let composer = tokens[0];
        let key = tokens[1];
        collection[name] = { composer, key };
        console.log(
          `${name} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (action === "Remove") {
      if (name in collection) {
        delete collection[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (action === "ChangeKey") {
      if (name in collection) {
        let newKey = tokens[0];
        collection[name].key = newKey;
        console.log(`Changed the key of ${name} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
    command = input.shift();
  }
  for (let name of Object.keys(collection)) {
    console.log(
      `${name} -> Composer: ${collection[name].composer}, Key: ${collection[name].key}`
    );
  }
}
pianist([
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
