function shopingList(input) {
  let list = input[0].split("!");
  for (let i = 1; i < input.length; i++) {
    let newCommand = input[i].split(" ");
    let action = newCommand[0];
    if (action == "Urgent" && !list.includes(newCommand[1])) {
      list.unshift(newCommand[1]);
    } else if (action == "Unnecessary" && list.includes(newCommand[1])) {
      let index = list.indexOf(newCommand[1]);
      list.splice(index, 1);
    } else if (action == "Correct" && list.includes(newCommand[1])) {
      let index = list.indexOf(newCommand[1]);
      list[index] = newCommand[2];
    } else if (action == "Rearrange" && list.includes(newCommand[1])) {
      let index = list.indexOf(newCommand[1]);
      let removedItem = list.splice(index, 1);
      list.push(removedItem[0]);
    } else if (action == "Go" && newCommand[1]=='Shopping!') {
      console.log(list.join(", "));
      return;
    }
  }
}
shopingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
