function counterStrike(input) {
  
  let energy = input[0];
  let battlesWon = 0;
  let index = 1;
  let distance = input[index];

  while (distance !== "End of battle") {
    distance = Number(distance);
    if (energy >= distance) {
      battlesWon++;
      energy -= distance;
    } else {
      console.log(
        `Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`
      );
      return;
    }
    if (battlesWon % 3 === 0) {
      energy += battlesWon;
    }
    index++;
    distance = input[index];
  }
  console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
