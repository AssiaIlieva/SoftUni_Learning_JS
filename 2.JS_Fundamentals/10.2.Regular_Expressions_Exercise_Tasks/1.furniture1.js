function furniture(input) {
  let furnitureArr = [];
  let spendMoney = 0;
  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let command = input.shift();

  while (command !== "Purchase") {
    let match = command.match(pattern);

    if (match) {
      let { name, price, qty } = match.groups;
      let furnitureCost = Number(price) * Number(qty);
      furnitureArr.push(name);
      spendMoney += furnitureCost;
    }
    command = input.shift();
  }
  console.log(`Bought furniture:`);
  if (furnitureArr.length > 0) {
    furnitureArr.forEach((element) => {
      console.log(element);
    });
  }
  console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
