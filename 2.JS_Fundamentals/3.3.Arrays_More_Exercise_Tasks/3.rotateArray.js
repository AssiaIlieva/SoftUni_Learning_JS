function rotateArray(array) {
  let rotations = Number(array[array.length - 1]);
  array.pop();
  for (let i = 1; i <= rotations; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  console.log(array.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
