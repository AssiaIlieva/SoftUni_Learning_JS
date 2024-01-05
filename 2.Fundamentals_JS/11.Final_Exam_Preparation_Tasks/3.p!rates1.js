function pirats(input) {
  let targets = {};
  let command = input.shift();
  while (command !== "Sail") {
    let [name, population, gold] = command.split("||");
    population = Number(population);
    gold = Number(gold);
    if (targets.hasOwnProperty(name)) {
      targets[name].population += population;
      targets[name].gold += gold;
    } else {
      targets[name] = { population, gold };
    }
    command = input.shift();
  }
  let newCommand = input.shift();
  while (newCommand !== "End") {
    let tokens = newCommand.split("=>");
    let action = tokens[0];
    let city = tokens[1];
    if (action === "Plunder") {
      let people = Number(tokens[2]);
      let gold = Number(tokens[3]);
      console.log(
        `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      targets[city].gold -= gold;
      targets[city].population -= people;
      if (targets[city].gold === 0 || targets[city].population === 0) {
        console.log(`${city} has been wiped off the map!`);
        delete targets[city];
      }
    } else if (action === "Prosper") {
      let gold = Number(tokens[2]);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        targets[city].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`
        );
      }
    }
    newCommand = input.shift();
  }
  let cities = Object.keys(targets);
  if (cities.length === 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`
    );
    cities.forEach((city) => {
      console.log(
        `${city} -> Population: ${targets[city].population} citizens, Gold: ${targets[city].gold} kg`
      );
    });
  }
}
pirats([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
