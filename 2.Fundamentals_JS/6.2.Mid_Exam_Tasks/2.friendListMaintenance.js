function friendListMaintenance(input) {
  let list = input[0].split(", ");
  let indx = 1;
  let newCommand = input[indx].split(" ");

  while (!newCommand.includes("Report")) {
    let action = newCommand[0];

    if (action === "Blacklist") {
      let name = newCommand[1];
      if (list.includes(name)) {
        let blackListedIndx = list.indexOf(name);
        list[blackListedIndx] = "Blacklisted";
        console.log(`${name} was blacklisted.`);
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (action === "Error") {
      let lostIndx = newCommand[1];
      if (lostIndx >= 0 && lostIndx < list.length) {
        let nameToBeLost = list[lostIndx];
        if (nameToBeLost !== "Blacklisted" && nameToBeLost !== "Lost") {
          list[lostIndx] = "Lost";
          console.log(`${nameToBeLost} was lost due to an error.`);
        }
      }
    } else if (action === "Change") {
      let indxToBeChanged = newCommand[1];
      if (indxToBeChanged >= 0 && indxToBeChanged < list.length) {
        let currentName = list[indxToBeChanged];
        let newName = newCommand[2];
        list[indxToBeChanged] = newName;
        console.log(`${currentName} changed his username to ${newName}.`);
      }
    }
    indx++;
    newCommand = input[indx].split(" ");
  }
  let blackListedNames = list.filter((x) => x === "Blacklisted");
  let blackListedCount = blackListedNames.length;
  let lostNames = list.filter((x) => x == "Lost");
  let lostNamesCount = lostNames.length;

  console.log(`Blacklisted names: ${blackListedCount}`);
  console.log(`Lost names: ${lostNamesCount}`);
  console.log(list.join(" "));
}
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
