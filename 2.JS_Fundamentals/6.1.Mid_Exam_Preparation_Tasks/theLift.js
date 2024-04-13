function theLift(input) {
  people = Number(input[0]);
  let wagons = input[1].split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      let peopleNeeded = 4 - wagons[i];
      if (people >= peopleNeeded) {
        wagons[i] += peopleNeeded;
        people -= peopleNeeded;
      } else {
        wagons[i] += people;
        people -= people;
      }
    }
    if (people == 0) {
      break;
    }
  }
  let fullWagons = wagons.filter((x) => x == 4);

  if (fullWagons.length < wagons.length && people === 0) {
    console.log("The lift has empty spots!");
    console.log(wagons.join(" "));
  } else if (fullWagons.length === wagons.length && people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(wagons.join(" "));
  } else {
    console.log(wagons.join(" "));
  }
}
theLift(["20", "0 2 0"]);
