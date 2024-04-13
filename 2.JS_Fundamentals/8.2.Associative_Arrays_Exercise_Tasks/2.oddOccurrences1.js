function oddOccurences(input) {
  let inputArray = input.split(" ").map((el) => el.toLowerCase());
  let map = new Map();
  for (let element of inputArray) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  let filteredArray = Array.from(map.entries()).filter((a) => a[1] % 2 !== 0);
  let result = [];
  filteredArray.forEach((element) => {
    result.push(element[0]);
  });
  console.log(result.join(" "));
}
oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
