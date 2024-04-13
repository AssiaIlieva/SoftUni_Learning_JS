function catalogue(input) {
  let result = {};

  for (let line of input) {
    let [name, price] = line.split(" : ");
    result[name] = Number(price);
  }
  let sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

  let groupChar = "";
  for (let key of sortedKeys) {
    if (groupChar !== key[0]) {
      console.log(key[0]);
      groupChar = key[0];
    }
    console.log(`  ${key}: ${result[key]}`);
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
