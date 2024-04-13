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
    command = input.shift();
  while (command !== "End") {
    let tokens = command.split("=>");
    let action = tokens.shift();
    if (action === "Plunder") {
      let [city, people, gold] = tokens;
      people = Number(people);
      gold = Number(gold);
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
      let [city, gold] = tokens;
          gold = Number(gold);
          if (gold < 0) {
            console.log(`Gold added cannot be a negative number!`);
            command = input.shift();
            continue;
          }
        targets[city].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`
        );
    }
    command = input.shift();
  }
  let entries = Object.entries(targets);
    if(entries.length === 0){
      console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }else{
      console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
      entries.forEach(([city, stats]) => {
        console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`);
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
