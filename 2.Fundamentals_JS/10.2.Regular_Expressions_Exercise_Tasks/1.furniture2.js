function furniture(input) {
  let arrFurniture = [];
  let spendMoney = 0;
  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let command = input.shift();

  while (command !== "Purchase") {
    let match = command.match(pattern);

    if (match) {
      let name = match.groups.name;
      let price = Number(match.groups.price);
      let qty = Number(match.groups.qty);
      let furnitureCost = price * qty;
      arrFurniture.push(name);
      spendMoney += furnitureCost;
    }
    command = input.shift();
  }
  console.log(`Bought furniture:`);

  if (arrFurniture.length > 0) {
    arrFurniture.forEach((element) => {
      console.log(element);
    });
  }
  console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
