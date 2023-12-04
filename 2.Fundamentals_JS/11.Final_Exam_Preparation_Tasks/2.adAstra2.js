function adAstra(input) {
  let pattern =
    /(?<delimitar>\#|\|)(?<food>[A-Za-z ]+)(\k<delimitar>)(?<date>\d{2}\/\d{2}\/\d{2})(\k<delimitar>)(?<calories>\d+)(\k<delimitar>)/g;
  let foodArr = [];
  let totalCalories = 0;
  let match = pattern.exec(input);
  while (match !== null) {
    let calories = Number(match.groups.calories);
    totalCalories += calories;
    foodArr.push(match);
    match = pattern.exec(input);
  }
  let daysWithFood = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${daysWithFood} days!`);

  if (daysWithFood > 0) {
    for (let el of foodArr) {
      let food = el.groups.food;
      let date = el.groups.date;
      let calories = el.groups.calories;
      console.log(
        `Item: ${food}, Best before: ${date}, Nutrition: ${calories}`
      );
    }
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
