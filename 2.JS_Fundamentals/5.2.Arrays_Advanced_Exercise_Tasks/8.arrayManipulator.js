function arrayManipulator(nums, commands) {
  for (let command of commands) {
    let newCommand = command.split(" ");
    let action = newCommand[0];

    switch (action) {
      case "add":
        add(newCommand);
        break;
      case "addMany":
        addMany(newCommand);
        break;
      case "contains":
        contains(newCommand);
        break;
      case "remove":
        remove(newCommand);
        break;
      case "shift":
        shift(newCommand);
        break;
      case "sumPairs":
        sumPairs(nums);
        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
        return;
    }
  }
  function add(newCommand) {
    let index = Number(newCommand[1]);
    let num = Number(newCommand[2]);
    nums.splice(index, 0, num);
  }
  function addMany(newCommand) {
    let index = Number(newCommand[1]);
    let numsToAdd = newCommand.slice(2).map(Number);
    for (let num of numsToAdd) {
      nums.splice(index, 0, num);
      index++;
    }
  }
  function contains(newCommand) {
    let searchedNum = Number(newCommand[1]);
    let index = nums.indexOf(searchedNum);
    console.log(index);
  }
  function remove(newCommand) {
    let index = Number(newCommand[1]);
    nums.splice(index, 1);
  }
  function shift(newCommand) {
    let rotations = Number(newCommand[1]);
    for (let i = 0; i < rotations; i++) {
      let num = nums.shift();
      nums.push(num);
    }
  }
  function sumPairs(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i += 2) {
      if (i + 1 < array.length) {
        let sum = array[i] + array[i + 1];
        newArray.push(sum);
      } else {
        newArray.push(array[i]);
      }
    }
    nums = newArray;
  }
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
