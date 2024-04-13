function adAstra(input) {
  let text = input.shift();
  let pattern =
    /([\|#])(?<name>[A-Za-z\s]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<kcal>\d+)\1/gm;

  let calSum = 0;

  let maches = text.match(pattern);

  if(maches === null){
    console.log(`You have food to last you for: 0 days!`);
    return;
  }

  for (const match of maches) {
    let delimitar = match[0];
    let splited = match.split(delimitar);
    let calories = Number(splited[3]);
    calSum += calories;
  }
  let days = Math.trunc(calSum / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  let matchedItems = text.matchAll(pattern);

  for (const food of matchedItems) {
    console.log(
      `Item: ${food.groups.name}, Best before: ${food.groups.date}, Nutrition: ${food.groups.kcal}`
    );
  }
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
