function piccolo(input) {
  let parking = new Set();

  for (let entry of input) {
    let [direction, carNumber] = entry.split(", ");

    if (direction === "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }
  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sortedCarNumbers = Array.from(parking).sort((a, b) =>
      a.localeCompare(b)
    );
    sortedCarNumbers.forEach((element) => {
      console.log(element);
    });
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
