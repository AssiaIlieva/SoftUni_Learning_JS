function houseParty(input) {
  let partyList = [];

  for (let command of input) {
    let newCommand = command.split(" ");
    if (!newCommand.includes("not") && !partyList.includes(newCommand[0])) {
      partyList.push(newCommand[0]);
    } else if (
      !newCommand.includes("not") &&
      partyList.includes(newCommand[0])
    ) {
      console.log(`${newCommand[0]} is already in the list!`);
    } else if (
      newCommand.includes("not") &&
      partyList.includes(newCommand[0])
    ) {
      let index = partyList.indexOf(newCommand[0]);
      partyList.splice(index, 1);
    } else if (
      newCommand.includes("not") &&
      !partyList.includes(newCommand[0])
    ) {
      console.log(`${newCommand[0]} is not in the list!`);
    }
  }
  console.log(partyList.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
