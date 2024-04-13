function plantDiscovery(input) {
  let num = Number(input.shift());
  let plants = {};

  for (let i = 0; i < num; i++) {
    let [name, rarity] = input.shift().split("<->");
    plants[name] = {
      rarity: rarity,
      rating: [],
    };
  }
  let command = input.shift();
  while (command !== "Exhibition") {
    let [action, name, ...tokens] = command.split(" ");
    if (plants.hasOwnProperty(name)) {
      if (action === "Rate:") {
        let value = Number(tokens[1]);
        plants[name].rating.push(value);
      } else if (action === "Update:") {
        let newRarity = tokens[1];
        plants[name].rarity = newRarity;
      } else if (action === "Reset:") {
        plants[name].rating = [];
      }
    } else {
      console.log("error");
    }
    command = input.shift();
  }
  console.log(`Plants for the exhibition:`);
  for (const key of Object.keys(plants)) {
    let ratingCount = plants[key].rating.length;
    let avrRating = 0
    if(ratingCount > 0){
        avrRating =
          plants[key].rating.reduce((acc, value) => acc + value, 0) / ratingCount;
    }
    console.log(
      `- ${key}; Rarity: ${plants[key].rarity}; Rating: ${avrRating.toFixed(2)}`
    );
  }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

