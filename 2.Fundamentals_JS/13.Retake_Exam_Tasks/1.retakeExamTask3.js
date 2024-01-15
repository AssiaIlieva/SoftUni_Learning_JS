function task3(input) {
  let distributors = {};
  let clients = {};
  let income = 0;

  let command = input.shift();

  while (command !== "End") {
    let [action, name, amount] = command.split(" ");
    amount = Number(amount);

    if (action === "Deliver") {
      if (name in distributors) {
        distributors[name] += amount;
      } else {
        distributors[name] = amount;
      }
    } else if (action === "Return") {
      if (name in distributors) {
        if (distributors[name] === amount) {
          delete distributors[name];
        } else if (distributors[name] > amount) {
          distributors[name] -= amount;
        }
      }
    } else if (action === "Sell") {
      income += amount;
      if (name in clients) {
        clients[name] += amount;
      } else {
        clients[name] = amount;
      }
    }
    command = input.shift();
  }
  for (let name of Object.keys(clients)) {
    console.log(`${name}: ${clients[name].toFixed(2)}`);
  }
  console.log(`-----------`);

  for (let name of Object.keys(distributors)) {
    console.log(`${name}: ${distributors[name].toFixed(2)}`);
  }
  console.log(`-----------`);
  console.log(`Total Income: ${income.toFixed(2)}`);
}
task3([
  "Deliver North 200.30",
  "Sell Peter 30.20",
  "Return Macro 5000.00",
  "Return North 100.30",
  "Sell Peter 50.50",
  "End",
]);
