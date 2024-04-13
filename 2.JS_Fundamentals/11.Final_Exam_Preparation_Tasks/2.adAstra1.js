function adAstra(input) {
  let string = input.shift();
  let pattern =
    /([#|])(?<name>[A-za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
  let totalKcals = 0;
  let products = [];

  let matches = string.matchAll(pattern);
  console.log(matches);

  for (let match of matches) {
    let { name, expdate, kcal } = match.groups;
    totalKcals += Number(kcal);
    products.push({ name, expdate, kcal });
  }

  let days = Math.floor(totalKcals / 2000);

  console.log(`You have food to last you for: ${days} days!`);

  products.forEach((element) => {
    console.log(
      `Item: ${element.name}, Best before: ${element.expdate}, Nutrition: ${element.kcal}`
    );
  });
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
