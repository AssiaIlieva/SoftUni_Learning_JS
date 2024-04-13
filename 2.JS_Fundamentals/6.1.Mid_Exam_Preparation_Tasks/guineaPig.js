function guineaPig(input) {
  let food = Number(input[0]);
  let hay = Number(input[1]);
  let cover = Number(input[2]);
  let weight = Number(input[3]);
  let coverConsumption = weight / 3;

  for (let i = 1; i <= 30; i++) {
    food -= 0.3;
    if (i % 2 == 0) {
      hay -= food * 0.05;
    }
    if (i % 3 == 0) {
      cover -= coverConsumption;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${food.toFixed(
      2
    )}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
  );
}
guineaPig(["10", "5", "5.2", "1"]);
