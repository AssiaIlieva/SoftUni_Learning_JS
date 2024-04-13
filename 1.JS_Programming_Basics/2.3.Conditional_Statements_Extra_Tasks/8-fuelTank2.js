function fuelCost(input) {
    let fuelType = input[0];
    let fuelAmount = Number(input[1]);
    let hasDiscountCard = input[2];
  
    let fuelPrice = 0;
    let discountPerLiter = 0;
  
    if (fuelType === "Gas") {
      fuelPrice = 0.93;
      discountPerLiter = 0.08;
    } else if (fuelType === "Gasoline") {
      fuelPrice = 2.22;
      discountPerLiter = 0.18;
    } else if (fuelType === "Diesel") {
      fuelPrice = 2.33;
      discountPerLiter = 0.12;
    }
  
    if (hasDiscountCard === "No") {
      discountPerLiter = 0;
    }
  
    let totalPrice = fuelAmount * (fuelPrice - discountPerLiter);
  
    if (fuelAmount >= 20 && fuelAmount <= 25) {
      totalPrice = totalPrice * 0.92;
    } else if (fuelAmount > 25) {
      totalPrice = totalPrice * 0.90;
    }  
    console.log(`${totalPrice.toFixed(2)} lv.`);
  }
  fuelCost(["Gas", "30", "Yes"])