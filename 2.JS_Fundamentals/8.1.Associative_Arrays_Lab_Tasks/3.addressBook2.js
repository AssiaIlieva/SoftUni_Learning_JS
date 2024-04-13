function addressBook(input) {
  let addressBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }

  let sortedNames = Object.entries(addressBook);
  sortedNames.sort((a, b) => a[0].localeCompare(b[0]));
  for (let name of sortedNames) {
    console.log(`${name[0]} -> ${name[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
