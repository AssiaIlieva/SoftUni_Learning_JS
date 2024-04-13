function heroesOfCodeAndLogic(input) {
  let num = Number(input.shift());
  let partyObj = {};

  for (let i = 0; i < num; i++) {
    let heroData = input.shift();
    let [name, hp, mp] = heroData.split(" ");
    let hero = {
      hp: Number(hp),
      mp: Number(mp),
    };
    partyObj[name] = hero;
  }
  while (input[0] !== "End") {
    let tokens = input.shift().split(" - ");
    let action = tokens[0];
    let name = tokens[1];
    let hero = partyObj[name];
    if (action === "CastSpell") {
      let mpNeeded = Number(tokens[2]);
      let spell = tokens[3];
      if (hero.mp >= mpNeeded) {
        hero.mp -= mpNeeded;
        console.log(
          `${name} has successfully cast ${spell} and now has ${hero.mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spell}!`);
      }
    } else if (action === "TakeDamage") {
      let damage = Number(tokens[2]);
      let attacker = tokens[3];
      hero.hp -= damage;
      if (hero.hp > 0) {
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete partyObj[name];
      }
    } else if (action === "Recharge") {
      let amountMP = Number(tokens[2]);
      if (hero.mp + amountMP > 200) {
        amountMP = 200 - hero.mp;
        hero.mp = 200;
      } else {
        hero.mp += amountMP;
      }
      console.log(`${name} recharged for ${amountMP} MP!`);
    } else if (action === "Heal") {
      let amountHP = Number(tokens[2]);
      if (hero.hp + amountHP > 100) {
        amountHP = 100 - hero.hp;
        hero.hp = 100;
      } else {
        hero.hp += amountHP;
      }
      console.log(`${name} healed for ${amountHP} HP!`);
    }
  }
  for (let key in partyObj) {
    let hero = partyObj[key];
    console.log(key);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
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
