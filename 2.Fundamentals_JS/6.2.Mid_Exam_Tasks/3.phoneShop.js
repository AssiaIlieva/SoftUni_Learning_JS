function phoneShop(input) {
  let phoneList = input[0].split(", ");

  let index = 1;
  let newCommand = input[index];

  while (newCommand !== "End") {
    let newEntry = newCommand.split(" - ");
    let action = newEntry[0];
    if (action === "Add") {
      let newPhone = newEntry[1];
      if (!phoneList.includes(newPhone)) {
        phoneList.push(newPhone);
      }
    } else if (action === "Remove") {
      let phoneToRemove = newEntry[1];
      if (phoneList.includes(phoneToRemove)) {
        let index = phoneList.indexOf(phoneToRemove);
        phoneList.splice(index, 1);
      }
    } else if (action === "Bonus phone") {
      let phones = newEntry[1].split(":");
      let oldPhone = phones[0];
      let newPhone = phones[1];
      if (phoneList.includes(oldPhone)) {
        let index = phoneList.indexOf(oldPhone);
        phoneList.splice(index + 1, 0, newPhone);
      }
    } else if (action === "Last") {
      let phoneToBeMoved = newEntry[1];
      if (phoneList.includes(phoneToBeMoved)) {
        let index = phoneList.indexOf(phoneToBeMoved);
        let removedPhone = phoneList.splice(index, 1);
        phoneList.push(removedPhone);
      }
    }
    index++;
    newCommand = input[index];
  }
  console.log(phoneList.join(", "));
}
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",

  "Last - SamsungA50",

  "Add - MotorolaG5",

  "End",
]);
