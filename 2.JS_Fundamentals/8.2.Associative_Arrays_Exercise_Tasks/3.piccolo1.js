function piccolo(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(", ");
    let command = tokens[0];
    let car = tokens[1];
    if (result.includes(car) && command === "OUT") {
      let index = result.indexOf(car);
      result.splice(index, 1);
    } else if (!result.includes(car) && command === "IN") {
      result.push(car);
    }
  }
  if (result.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    result.sort((a, b) => a.localeCompare(b));
    result.forEach((element) => {
      console.log(element);
    });
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
