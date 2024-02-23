function lowestPrices(input) {
  let result = {};
  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (!result.hasOwnProperty(product) || result[product].price > price) {
      result[product] = { price, town };
    } 
  }
  for (let product in result) {
    console.log(`${product} -> ${result[product].price} (${result[product].town})`);
  }
}
lowestPrices([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
]);
