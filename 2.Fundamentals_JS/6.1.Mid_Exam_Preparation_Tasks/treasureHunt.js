function treasureHunt(input) {
  let loot = input.shift().split("|");
  let command = input.shift();

  while (command !== "Yohoho!") {
    let newCommand = command.split(" ");
    let action = newCommand.shift();

    if (action === "Loot") {
      newCommand
        .filter((el) => !loot.includes(el))
        .forEach((el) => loot.unshift(el));
    } else if (action === "Drop") {
      let index = Number(newCommand.shift());
      if (index >= 0 && index < loot.length) {
        let temp = loot.splice(index, 1);
        loot.push(temp);
      }
    } else if (action === "Steal") {
      let count = Number(newCommand.shift());
      let stolenLoot = loot.splice(-count);
      console.log(stolenLoot.join(", "));
    }
    command = input.shift();
  }
  if (loot.length === 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let sum = 0;
    for (let el of loot) {
      sum += el.length;
    }
    let averageGain = sum / loot.length;
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
