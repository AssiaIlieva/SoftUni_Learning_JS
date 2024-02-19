function townPopulation(input) {
  let towns = {};

  for (let town of input) {
    let [name, population] = town.split(" <-> ");
    if (!towns.hasOwnProperty(name)) {
      towns[name] = Number(population);
    } else {
      towns[name] += Number(population);
    }
  }
  for (let key of Object.keys(towns)) {
    console.log(`${key} : ${towns[key]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
