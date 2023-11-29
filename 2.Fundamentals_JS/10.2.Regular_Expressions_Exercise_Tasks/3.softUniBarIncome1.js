function softUniBarIncome(array) {
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d*)\$/g;
  let totalIncome = 0;
  let index = 0;
  let currentLine = array[index];

  while (currentLine !== "end of shift") {
    let match = [...currentLine.matchAll(pattern)];

    for (const el of match) {
      let cost = Number(el.groups.count) * Number(el.groups.price);
      totalIncome += cost;
      console.log(
        `${el.groups.customer}: ${el.groups.product} - ${cost.toFixed(2)}`
      );
    }
    index++;
    currentLine = array[index];
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
