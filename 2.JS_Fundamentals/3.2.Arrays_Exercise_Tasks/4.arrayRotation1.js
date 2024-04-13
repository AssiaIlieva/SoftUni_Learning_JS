function arrayRotation(array, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let newArray = [];
    for (let j = 1; j < array.length; j++) {
      newArray.push(array[j]);
    }
    newArray.push(array[0]);
    array = newArray;
  }
  console.log(array.join(" "));
}
arrayRotation([32, 21, 61, 1], 4);
