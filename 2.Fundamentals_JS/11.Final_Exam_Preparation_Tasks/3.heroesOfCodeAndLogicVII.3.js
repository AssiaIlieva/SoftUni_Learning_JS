function heroesOfCodeAndLogic(input) {
  let n = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[name] = { hp, mp };
  }
  let newLine = input.shift();
  while (newLine !== "End") {
    let [action, ...tokens] = newLine.split(" - ");
    if (action === "CastSpell") {
      let name = tokens[0];
      let mpNeeded = Number(tokens[1]);
      let spellName = tokens[2];
      if (heroes[name].mp >= mpNeeded) {
        heroes[name].mp -= mpNeeded;
        console.log(
          `${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`);
      }
    } else if (action === "TakeDamage") {
      let name = tokens[0];
      let damage = Number(tokens[1]);
      let attacker = tokens[2];
      heroes[name].hp -= damage;
      if (heroes[name].hp > 0) {
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete heroes[name];
      }
    } else if (action === "Recharge") {
      let name = tokens[0];
      let amount = Number(tokens[1]);
      if (heroes[name].mp + amount > 200) {
        amount = 200 - heroes[name].mp;
        heroes[name].mp = 200;
      } else {
        heroes[name].mp += amount;
      }
      console.log(`${name} recharged for ${amount} MP!`);
    } else if (action === "Heal") {
      let name = tokens[0];
      let amount = Number(tokens[1]);
      if (heroes[name].hp + amount > 100) {
        amount = 100 - heroes[name].hp;
        heroes[name].hp = 100;
      } else {
        heroes[name].hp += amount;
      }
      console.log(`${name} healed for ${amount} HP!`);
    }
    newLine = input.shift();
  }
  for (const key of Object.keys(heroes)) {
    console.log(`${key}`);
    console.log(`  HP: ${heroes[key].hp}`);
    console.log(`  MP: ${heroes[key].mp}`);
  }
}
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
