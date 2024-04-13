function partyTime(input) {
  let vipList = [];
  let regularList = [];

  let command = input.shift();

  while (command !== "PARTY") {
    let firstChar = command[0];
    if (isNaN(firstChar)) {
      regularList.push(command);
    } else {
      vipList.push(command);
    }
    command = input.shift();
  }
  let allGuest = vipList.concat(regularList);
  for (let guest of input) {
    if (allGuest.includes(guest)) {
      allGuest.splice(allGuest.indexOf(guest), 1);
    }
  }
  console.log(allGuest.length);
  allGuest.forEach((guest) => console.log(guest));
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
