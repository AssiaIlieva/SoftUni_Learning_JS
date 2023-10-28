function storeProvision(store, delivery) {
  let storeStorage = {};
  for (let i = 0; i < store.length; i += 2) {
    let product = store[i];
    storeStorage[product] = Number(store[i + 1]);
  }
  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    if (!storeStorage.hasOwnProperty(product)) {
      storeStorage[product] = 0;
    }
    storeStorage[product] += Number(delivery[i + 1]);
  }
  for (let key in storeStorage) {
    console.log(`${key} -> ${storeStorage[key]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
