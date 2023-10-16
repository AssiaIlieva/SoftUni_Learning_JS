function muOnline(input) {
  let commands = input.split("|");
  let health = 100;
  let bitcoins = 0;

  for (let i = 0; i < commands.length; i++) {
    let newComand = commands[i].split(" ");
    let action = newComand[0];
    let num = Number(newComand[1]);
    if (action === "potion") {
      health += num;
      if (health <= 100) {
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
        let hp = 100 - (health - num);
        health = 100;
        console.log(`You healed for ${hp} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (action === "chest") {
      bitcoins += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
      let monster = action;
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
