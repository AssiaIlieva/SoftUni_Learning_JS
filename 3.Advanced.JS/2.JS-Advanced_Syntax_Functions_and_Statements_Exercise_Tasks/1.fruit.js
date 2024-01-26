function fruit(type, weight, price) {
  let kilograms = weight / 1000;
  let amount = kilograms * price;
  console.log(
    `I need $${amount.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${type}.`
  );
}
fruit("apple", 1563, 2.35);
