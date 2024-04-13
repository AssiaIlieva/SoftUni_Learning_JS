function inventory(input) {
  let result = [];

  for (let line of input) {
    let [name, level, items] = line.split(" / ");
    let hero = {
      name: name,
      level: Number(level),
      items: items,
    };
    result.push(hero);
  }

  result.sort((a, b) => a.level - b.level);

  for (let heros of result) {
    console.log(`Hero: ${heros.name}`);
    console.log(`level => ${heros.level}`);
    console.log(`items => ${heros.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
