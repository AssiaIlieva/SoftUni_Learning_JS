function aMinerTask(input) {
  let resources = {};

  for (let index = 0; index < input.length; index += 2) {
    let resource = input[index];
    let quantity = Number(input[index + 1]);
    if (resources[resource]) {
      resources[resource] += quantity;
    } else {
      resources[resource] = quantity;
    }
  }
  for (let resource in resources) {
    console.log(`${resource} -> ${resources[resource]}`);
  }
}
aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
