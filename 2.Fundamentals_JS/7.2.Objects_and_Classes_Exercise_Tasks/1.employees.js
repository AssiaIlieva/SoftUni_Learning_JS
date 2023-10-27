function employees(array) {
  let obj = {};

  for (let el of array) {
    obj[el] = el.length;
  }
  for (let name in obj) {
    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
