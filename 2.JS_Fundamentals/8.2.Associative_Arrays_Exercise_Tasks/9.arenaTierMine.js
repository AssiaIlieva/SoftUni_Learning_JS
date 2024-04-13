function arenaTier(input) {
  let gladiatorObj = {};

  for (let line of input) {
    if (line === "Ave Cesar") {
      break;
    }
    let element = line.split(" ");
    if (element[1] === "->") {
      let gladiator = element[0];
      let technique = element[2];
      let skill = Number(element[4]);
      if (!gladiatorObj.hasOwnProperty(gladiator)) {
        gladiatorObj[gladiator] = {};
      }
      if (
        !gladiatorObj[gladiator].hasOwnProperty(technique) ||
        gladiatorObj[gladiator][technique] < skill
      ) {
        gladiatorObj[gladiator][technique] = skill;
      }
    } else if (element[1] === "vs") {
      let gladiator1 = element[0];
      let gladiator2 = element[2];
      if (
        gladiatorObj.hasOwnProperty(gladiator1) &&
        gladiatorObj.hasOwnProperty(gladiator2)
      ) {
        let gladiator1Techniques = gladiatorObj[gladiator1];
        let gladiator2Techniques = gladiatorObj[gladiator2];
        for (let key in gladiator1Techniques) {
          if (
            gladiator2Techniques.hasOwnProperty(key) &&
            gladiator2Techniques[key] > gladiator1Techniques[key]
          ) {
            delete gladiatorObj[gladiator1];
          } else if (
            gladiator2Techniques.hasOwnProperty(key) &&
            gladiator2Techniques[key] < gladiator1Techniques[key]
          ) {
            delete gladiatorObj[gladiator2];
          }
        }
      }
    }
  }
  for (let gradiator in gladiatorObj) {
    let sum = 0;
    let gladiatorSumObj = gladiatorObj[gradiator];
    for (let gladiatorTechSum in gladiatorSumObj) {
      sum += gladiatorSumObj[gladiatorTechSum];
    }
    gladiatorSumObj["sum"] = sum;
  }
  let gladiators = Object.entries(gladiatorObj);
  gladiators.sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]));
  gladiators.forEach((element) => {
    console.log(`${element[0]}: ${element[1].sum} skill`);
    delete element[1].sum;
    let gladiatorTech = Object.entries(element[1]).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
    gladiatorTech.forEach((element) => {
      console.log(`- ${element[0]} <!> ${element[1]}`);
    });
  });
}
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ])
