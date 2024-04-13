function storeCatalogue(input) {
  let obj = {};
  for (let el of input) {
    let [name, price] = el.split(" : ");
    price = Number(price);
    obj[name] = price;
  }

  let sortedArr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  let letter = sortedArr[0][0][0];
  console.log(letter);
  for (let item of sortedArr) {
    if (letter !== item[0][0]) {
      letter = item[0][0];
      console.log(letter);
    }
    console.log(`  ${item[0]}: ${item[1]}`);
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
