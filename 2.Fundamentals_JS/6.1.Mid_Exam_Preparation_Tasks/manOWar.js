function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());
  let lowHealtCapacity = maxHealth * 0.2;
  let tokens = input.shift().split(" ");
  let command = tokens[0];

  while (command !== "Retire") {
    if (command === "Fire") {
      let index = Number(tokens[1]);
      let damage = Number(tokens[2]);
      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;
      }
      if (warShip[index] <= 0) {
        console.log(`You won! The enemy ship has sunken.`);
        return;
      }
    } else if (command === "Defend") {
      let startIndex = Number(tokens[1]);
      let endIndex = Number(tokens[2]);
      let damage = Number(tokens[3]);
      if (
        startIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex >= 0 &&
        endIndex < pirateShip.length
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damage;
          if (pirateShip[i] <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    } else if (command === "Repair") {
      let index = Number(tokens[1]);
      let health = Number(tokens[2]);
      if (index >= 0 && index < pirateShip.length) {
        if (pirateShip[index] + health > maxHealth) {
          health = maxHealth - pirateShip[index];
        }
        pirateShip[index] += health;
      }
    } else if (command === "Status") {
      let sectionForRepair = pirateShip.filter((el) => el < lowHealtCapacity);
      let count = sectionForRepair.length;
      console.log(`${count} sections need repair.`);
    }
    tokens = input.shift().split(" ");
    command = tokens[0];
  }
  let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
  let warShipStatus = warShip.reduce((a, b) => a + b, 0);
  console.log(`Pirate ship status: ${pirateShipStatus}`);
  console.log(`Warship status: ${warShipStatus}`);
}
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
