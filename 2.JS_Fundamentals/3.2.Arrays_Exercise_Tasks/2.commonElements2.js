function commonElements(array1, array2) {
  for (let el of array1) {
    if (array2.includes(el)) {
      console.log(el);
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
