function train(input) {
  let wagons = input[0].split(" ").map(Number);
  let capacity = Number(input[1]);

  for (let index = 2; index < input.length; index++) {
    let newComand = input[index].split(" ");

    if (newComand[0] === "Add") {
      wagons.push(Number(newComand[1]));
    } else {
      let passengers = Number(newComand[0]);
      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + passengers <= capacity) {
          wagons[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
