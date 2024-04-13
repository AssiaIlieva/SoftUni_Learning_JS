function addressBook(input) {
  let addressBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }
  let names = Object.keys(addressBook);
  let sortedNames = names.sort((a, b) => a.localeCompare(b));
  for (let name of sortedNames) {
    console.log(`${name} -> ${addressBook[name]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
