function thePianist(input) {
  let catalog = {};
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, composer, key] = input.shift().split("|");
    catalog[name] = {
      composer,
      key,
    };
  }

  while (input[0] !== "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    if (command === "Add") {
      let name = tokens[1];
      if (catalog.hasOwnProperty(name)) {
        console.log(`${name} is already in the collection!`);
      } else {
        let composer = tokens[2];
        let key = tokens[3];
        catalog[name] = {
          composer,
          key,
        };
        console.log(
          `${name} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      let name = tokens[1];
      if (catalog.hasOwnProperty(name)) {
        delete catalog[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let name = tokens[1];
      let newKey = tokens[2];
      if (catalog.hasOwnProperty(name)) {
        catalog[name].key = newKey;
        console.log(`Changed the key of ${name} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
  }
  let catalogArray = Object.entries(catalog);
  // .sort((a, b) => a[0].localeCompare(b[0])) || a[1].composer.localeCompare(b[1].composer);

  for (const name of catalogArray) {
    console.log(
      `${name[0]} -> Composer: ${name[1].composer}, Key: ${name[1].key}`
    );
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
