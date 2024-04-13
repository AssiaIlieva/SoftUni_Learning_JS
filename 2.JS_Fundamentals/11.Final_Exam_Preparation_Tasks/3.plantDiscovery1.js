function plantDiscovery(input) {
  let num = Number(input.shift());
  let plantObj = {};

  for (let i = 0; i < num; i++) {
    let [plant, rarity] = input.shift().split("<->");
    plantObj[plant] = {
      plant,
      rarity,
      rating: 0,
      count: 0,
    };
  }
  let command = input.shift();
  while (command !== "Exhibition") {
    let newLine = command.split(" - ").join(" ").split(" ");
    let action = newLine[0];
    let plant = newLine[1];
    if (!plantObj.hasOwnProperty(plant)) {
      console.log("error");
    } else {
      if (action === "Rate:") {
        let newRating = Number(newLine[2]);
        plantObj[plant]["rating"] += newRating;
        plantObj[plant]["count"]++;
      } else if (action === "Update:") {
        let newRarity = newLine[2];
        plantObj[plant]["rarity"] = newRarity;
      } else if (action === "Reset:") {
        plantObj[plant]["rating"] = 0;
        plantObj[plant]["count"] = 0;
      }
    }
    command = input.shift();
  }
  console.log(`Plants for the exhibition:`);
  for (let key in plantObj) {
    let avrRating = plantObj[key]["rating"] / plantObj[key]["count"] || 0;
    console.log(
      `- ${key}; Rarity: ${
        plantObj[key]["rarity"]
      }; Rating: ${avrRating.toFixed(2)}`
    );
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
