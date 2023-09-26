function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let frontElement = array[i];
    let backIndex = array.length - 1 - i;
    array[i] = array[backIndex];
    array[backIndex] = frontElement;
  }
  console.log(array.join(" "));
}
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
