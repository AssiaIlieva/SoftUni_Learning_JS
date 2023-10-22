function heartDelivery(input) {
  let neighbourhood = input.shift().split("@").map(Number);
  let length = neighbourhood.length - 1;
  let position = 0;
  let nextLine = input.shift();

  while (nextLine !== "Love!") {
    let command = nextLine.split(" ");
    let step = Number(command[1]);
    position += step;
    if (position > length) {
      position = 0;
    }
    if (neighbourhood[position] === 0) {
      console.log(`Place ${position} already had Valentine's day.`);
    } else {
      neighbourhood[position] -= 2;
      if (neighbourhood[position] === 0) {
        console.log(`Place ${position} has Valentine's day.`);
      }
    }
    nextLine = input.shift();
  }
  console.log(`Cupid's last position was ${position}.`);
  let result = neighbourhood.filter((el) => el > 0);
  if (result.length === 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${result.length} places.`);
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
