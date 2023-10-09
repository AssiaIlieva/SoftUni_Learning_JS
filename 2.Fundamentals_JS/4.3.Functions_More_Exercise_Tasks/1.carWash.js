function carWash(input) {
  let carState = 0;

  let soap = (value) => (carState += 10);
  let water = (value) => (carState *= 1.2);
  let vacuumCleaner = (value) => (carState *= 1.25);
  let mud = (value) => (carState *= 0.9);

  for (let element of input) {
    switch (element) {
      case "soap":
        soap(carState);
        break;
      case "water":
        water(carState);
        break;
      case "vacuum cleaner":
        vacuumCleaner(carState);
        break;
      case "mud":
        mud(carState);
        break;
    }
  }

  console.log(`The car is ${carState.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
