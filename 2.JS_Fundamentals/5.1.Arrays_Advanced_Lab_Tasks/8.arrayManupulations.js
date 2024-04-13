function arrayManipulation(input) {
  let array = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let [command, firstNum, secondNum] = input[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insert(firstNum, secondNum);
        break;
    }
  }
  function add(el) {
    array.push(el);
  }
  function remove(num) {
    array = array.filter((el) => el !== num);
  }
  function removeAt(index) {
    array.splice(index, 1);
  }
  function insert(num, index) {
    array.splice(index, 0, num);
  }
  console.log(array.join(" "));
}
arrayManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
