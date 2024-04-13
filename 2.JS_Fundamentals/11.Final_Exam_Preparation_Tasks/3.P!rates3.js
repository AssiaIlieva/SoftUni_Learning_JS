function pirates(input) {
  let destinations = {};

  let command = input.shift();

  while (command !== "Sail") {
    let [town, people, gold] = command.split("||");

    people = Number(people);
    gold = Number(gold);

    if (town in destinations) {
      destinations[town].people += people;
      destinations[town].gold += gold;
    } else {
      destinations[town] = { people, gold };
    }
    command = input.shift();
  }
  let event = input.shift();

  while (event !== "End") {
    let [action, town, ...tokens] = event.split("=>");
    if (action === "Plunder") {
      let people = Number(tokens[0]);
      let gold = Number(tokens[1]);
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      destinations[town].people -= people;
      destinations[town].gold -= gold;
      if (destinations[town].gold === 0 || destinations[town].people === 0) {
        console.log(`${town} has been wiped off the map!`);
        delete destinations[town];
      }
    } else if (action === "Prosper") {
      let gold = Number(tokens[0]);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        destinations[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${destinations[town].gold} gold.`
        );
      }
    }
    event = input.shift();
  }
  let count = Object.keys(destinations).length;
  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (let key of Object.keys(destinations)) {
      console.log(
        `${key} -> Population: ${destinations[key].people} citizens, Gold: ${destinations[key].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
