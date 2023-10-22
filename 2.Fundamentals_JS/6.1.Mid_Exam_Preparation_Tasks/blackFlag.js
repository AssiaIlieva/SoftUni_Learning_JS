function blackFlag(input) {
  let days = Number(input[0]);
  let daylyPlunder = Number(input[1]);
  let target = Number(input[2]);

  let gainedPlunder = 0;

  for (let i = 1; i <= days; i++) {
    gainedPlunder += daylyPlunder
    if (i % 3 === 0) {
      gainedPlunder += daylyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      gainedPlunder *= 0.7;
    }
  }
  if (gainedPlunder >= target) {
    console.log(`Ahoy! ${gainedPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (gainedPlunder / target) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["10", "20", "380"]);
