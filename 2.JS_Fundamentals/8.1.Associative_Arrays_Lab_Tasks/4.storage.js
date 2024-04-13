function storage(arr) {
  let map = new Map();
  for (let string of arr) {
    let tokens = string.split(" ");
    let product = tokens[0];
    let qnty = Number(tokens[1]);
    if (!map.has(product)) {
      map.set(product, qnty);
    } else {
      let currentQnty = map.get(product);
      let newQnty = currentQnty + qnty;
      map.set(product, newQnty);
    }
  }
  for (let kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
