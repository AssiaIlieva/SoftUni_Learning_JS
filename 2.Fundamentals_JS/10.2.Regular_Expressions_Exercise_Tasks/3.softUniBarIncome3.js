function softUniBarIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^\|\.\$\%]*<(?<product>\w+)>[^\|\.\$\%]*\|(?<count>\d+)\|[^|.$%0-9]*(?<price>\d+.?\d*)\$/g;
  let totalIncome = 0;
  let newLine = input.shift();

  while (newLine !== "end of shift") {
    let match = newLine.matchAll(pattern);
      for (const el of match) {
        let name = el.groups.name;
        let product = el.groups.product;
        let count = Number(el.groups.count);
        let price = Number(el.groups.price);
        let totalPrice = count * price;
        totalIncome += totalPrice;
        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
      
    }
    newLine = input.shift();
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
