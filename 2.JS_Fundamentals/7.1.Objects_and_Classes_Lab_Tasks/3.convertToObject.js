function convertToObject(jsonStr) {
  let person = JSON.parse(jsonStr);
  let result = Object.entries(person);
  for (let [key, value] of result) {
    console.log(`${key}: ${value}`);
 }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
