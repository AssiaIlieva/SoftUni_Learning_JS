function inventory(input) {
  let jurnal = input.shift().split(", ");
  let command = input.shift();

  while (command !== "Craft!") {
    let newCommand = command.split(" - ");
    let action = newCommand[0];
    if (action === "Collect") {
      let item = newCommand[1];
      if (!jurnal.includes(item)) {
        jurnal.push(item);
      }
    } else if (action === "Drop") {
      let item = newCommand[1];
      if (jurnal.includes(item)) {
        let index = jurnal.indexOf(item);
        jurnal.splice(index, 1);
      }
    } else if (action === "Combine Items") {
      let newInput = newCommand[1].split(":");
      let oldItem = newInput[0];
      let newItem = newInput[1];
      if (jurnal.includes(oldItem)) {
        indexOldItem = jurnal.indexOf(oldItem);
        jurnal.splice(indexOldItem + 1, 0, newItem);
      }
    } else if (action === "Renew") {
      let item = newCommand[1];
      if (jurnal.includes(item)) {
        let index = jurnal.indexOf(item);
        jurnal.splice(index, 1);
        jurnal.push(item);
      }
    }
    command = input.shift();
  }
  console.log(jurnal.join(", "));
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
