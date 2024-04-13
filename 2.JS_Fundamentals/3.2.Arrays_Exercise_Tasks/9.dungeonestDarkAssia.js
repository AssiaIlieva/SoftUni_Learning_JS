function dungeonestDark(arr) {
  let dungeon = arr[0].split("|");
  let health = 100;
  let coins = 0;
  let roomsCount = 0;

  for (let i = 0; i < dungeon.length; i++) {
    let room = dungeon[i].split(" ");
    let item = room[0];
    let number = Number(room[1]);
    roomsCount++;
    if (item == "potion") {
      if (health + number > 100) {
        number = 100 - health;
        health = 100;
      } else {
        health += number;
      }
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (item == "chest") {
      let newCoins = number;
      coins += newCoins;
      console.log(`You found ${newCoins} coins.`);
    } else {
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${item}.`);
      } else {
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${roomsCount}`);
        return;
      }
    }
  }
  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
