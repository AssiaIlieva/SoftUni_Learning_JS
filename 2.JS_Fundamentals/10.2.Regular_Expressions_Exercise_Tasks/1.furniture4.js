function furniture(input) {
  let pattern = />>(?<item>\w+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
  let totalMoneySpent = 0;
  let command = input.shift();
  console.log(`Bought furniture:`);

  while (command !== "Purchase") {
    let match = command.match(pattern);
    if (match) {
      let { item, price, quantity } = match.groups;
      totalMoneySpent += price * quantity;
      console.log(item);
    }
    command = input.shift();
  }
  console.log(`Total money spend: ${totalMoneySpent.toFixed(2)}`);
}
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
