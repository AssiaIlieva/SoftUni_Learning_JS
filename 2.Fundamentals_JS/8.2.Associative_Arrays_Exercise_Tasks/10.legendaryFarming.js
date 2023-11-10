function legendaryFarming(str) {
  let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  let junkMaterials = {};
  let legendaries = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };
  let materialsArr = str.split(" ");

  for (let i = 0; i < materialsArr.length; i += 2) {
    let qty = Number(materialsArr[i]);
    let material = materialsArr[i + 1].toLowerCase();
    if (material in keyMaterials) {
      keyMaterials[material] += qty;
      if (keyMaterials[material] >= 250) {
        let legendaryWon = legendaries[material];
        console.log(`${legendaryWon} obtained!`);
        keyMaterials[material] -= 250;
        break;
      }
    } else {
      if (material in junkMaterials) {
        junkMaterials[material] += qty;
      } else {
        junkMaterials[material] = qty;
      }
    }
  }
  let keyMaterialsEntries = Object.entries(keyMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  keyMaterialsEntries.forEach((element) => {
    console.log(`${element[0]}: ${element[1]}`);
  });
  let junkMaterialsEntries = Object.entries(junkMaterials).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  junkMaterialsEntries.forEach((element) => {
    console.log(`${element[0]}: ${element[1]}`);
  });
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
