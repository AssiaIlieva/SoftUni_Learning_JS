function worldTour(input) {
    let string = input.shift();
  
    let command = input.shift();
  
    while (command !== "Travel") {
      let [action, ...tokens] = command.split(":");
      if (action === "Add Stop") {
        let index = Number(tokens[0]);
        if (index >= 0 && index < string.length) {
          let stringToAdd = tokens[1];
          let leftHalf = string.slice(0, index);
          let rightHalf = string.slice(index);
          string = leftHalf + stringToAdd + rightHalf;
        }
      } else if (action === "Remove Stop") {
        let startInx = Number(tokens[0]);
        let endInx = Number(tokens[1]);
        if (
          startInx >= 0 &&
          startInx < string.length &&
          endInx >= 0 &&
          endInx < string.length
        ) {
          string = string.slice(0, startInx) + string.slice(endInx + 1);
        }
      } else if (action === "Switch") {
        let oldString = tokens[0];
        let newString = tokens[1];
        if (string.includes(oldString)) {
          updatedString = string.replace(oldString, newString)
          string = updatedString;
        }
      }
      console.log(string);
      command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);
  }
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])


