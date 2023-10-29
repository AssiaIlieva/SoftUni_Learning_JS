function storeProvision(stock, orderedProducts) {
  let products = {};

  for (let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let qty = Number(stock[i + 1]);

    products[productName] = qty;
  }

  for (let j = 0; j < orderedProducts.length; j += 2) {
    let productName = orderedProducts[j];
    let qty = Number(orderedProducts[j + 1]);

    if (productName in products) {
      products[productName] += qty;
    } else {
      products[productName] = qty;
    }
  }

  let result = Object.entries(products);
  for (let element of result) {
    let [product, qty] = element;
    console.log(`${product} -> ${qty}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
