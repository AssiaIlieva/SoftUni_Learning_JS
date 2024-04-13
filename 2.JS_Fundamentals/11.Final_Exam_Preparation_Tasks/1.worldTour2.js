function worldTour(input) {
  let travelPlan = input.shift();

  let command = input.shift().split(":");

  while (command[0] !== "Travel") {
    if (command[0] === "Add Stop") {
      let index = command[1];
      let stop = command[2];
      if (index >= 0 && index < travelPlan.length) {
        let firstPart = travelPlan.substring(0, index);
        let secondPart = travelPlan.substring(index);
        travelPlan = firstPart + stop + secondPart;
      }
    } else if (command[0] === "Remove Stop") {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      if (
        startIndex >= 0 &&
        startIndex < travelPlan.length &&
        endIndex >= 0 &&
        endIndex < travelPlan.length
      ) {
        let firstPart = travelPlan.substring(0, startIndex);
        let secondPart = travelPlan.substring(endIndex + 1);
        travelPlan = firstPart + secondPart;
      }
    } else if (command[0] === "Switch") {
      let oldString = command[1];
      let newString = command[2];
      if (travelPlan.includes(oldString)) {
        let updatedPlan = travelPlan.replace(oldString, newString);
        travelPlan = updatedPlan;
        }
      }
    console.log(travelPlan);
    command = input.shift().split(":");
  }
  console.log(`Ready for world tour! Planned stops: ${travelPlan}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
;
