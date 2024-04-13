function needForSpeed(input) {
  let num = Number(input.shift());
  let cars = {};

  for (let i = 0; i < num; i++) {
    let [car, km, fuel] = input.shift().split("|");
    km = Number(km);
    fuel = Number(fuel);
    cars[car] = { km, fuel };
  }
  let command = input.shift();
  while (command !== "Stop") {
    let [action, car, ...tokens] = command.split(" : ");
    if (action === "Drive") {
      let distance = Number(tokens[0]);
      let fuelNeeded = Number(tokens[1]);
      if (cars[car].fuel < fuelNeeded) {
        console.log("Not enough fuel to make that ride");
      } else {
        cars[car].fuel -= fuelNeeded;
        cars[car].km += distance;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`
        );
        if (cars[car].km >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      }
    } else if (action === "Refuel") {
      let fuelAdded = Number(tokens[0]);
      if (cars[car].fuel + fuelAdded > 75) {
        fuelAdded = 75 - cars[car].fuel;
      }
      cars[car].fuel += fuelAdded;
      console.log(`${car} refueled with ${fuelAdded} liters`);
    } else if (action === "Revert") {
      let kilometers = Number(tokens[0]);
      cars[car].km -= kilometers;
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      if (cars[car].km < 10000) {
        cars[car].km = 10000;
      }
    }
    command = input.shift();
  }
  for (const car of Object.keys(cars)) {
    console.log(
      `${car} -> Mileage: ${cars[car].km} kms, Fuel in the tank: ${cars[car].fuel} lt.`
    );
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
