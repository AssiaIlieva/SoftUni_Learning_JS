function needForSpeed(input) {
  let num = Number(input.shift());
  let cars = {};

  for (let i = 0; i < num; i++) {
    let tokens = input.shift().split("|");
    let [car, distance, fuel] = tokens;
    distance = Number(distance);
    fuel = Number(fuel);
    cars[car] = { distance, fuel };
  }
  let command = input.shift();
  while (command !== "Stop") {
    let [action, car, ...tokens] = command.split(" : ");
    if (action === "Drive") {
      let distance = Number(tokens[0]);
      let fuel = Number(tokens[1]);
      if (cars[car].fuel < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        cars[car].distance += distance;
        cars[car].fuel -= fuel;
        if (cars[car].distance >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      }
    } else if (action === "Refuel") {
      let fuel = Number(tokens[0]);
      if (cars[car].fuel + fuel > 75) {
        fuel = 75 - cars[car].fuel;
        cars[car].fuel = 75;
      } else {
        cars[car].fuel += fuel;
      }
      console.log(`${car} refueled with ${fuel} liters`);
    } else if (action === "Revert") {
      let kilometers = Number(tokens[0]);
      cars[car].distance -= kilometers;
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      if (cars[car].distance < 10000) {
        cars[car].distance = 10000;
      }
    }
    command = input.shift();
  }
  for (key in cars) {
    console.log(
      `${key} -> Mileage: ${cars[key].distance} kms, Fuel in the tank: ${cars[key].fuel} lt.`
    );
  }
}
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
