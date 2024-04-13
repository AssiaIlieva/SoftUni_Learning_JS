function pyramidOfKingDjoser(side, higth) {
  let end = 0;
  if (side % 2 === 0) {
    end = 2;
  } else {
    end = 1;
  }
  let stoneNeeded = 0;
  let marbleNeeded = 0;
  let lapisLasulyNeeded = 0;
  let goldNeeded = 0;
  let floorCounter = 0;

  for (let i = side; i >= end; i -= 2) {
    floorCounter++;
    if (i == end) {
      goldNeeded += Math.pow(end, 2) * higth;
    } else if (floorCounter % 5 == 0) {
      stoneNeeded += Math.pow(i - 2, 2) * higth;
      lapisLasulyNeeded += (i * 4 - 4) * higth;
    } else {
      stoneNeeded += Math.pow(i - 2, 2) * higth;
      marbleNeeded += (i * 4 - 4) * higth;
    }
  }
  console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
  console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLasulyNeeded)}`);
  console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
  console.log(`Final pyramid height: ${Math.floor(floorCounter * higth)}`);
}
pyramidOfKingDjoser(23, 0.5);
