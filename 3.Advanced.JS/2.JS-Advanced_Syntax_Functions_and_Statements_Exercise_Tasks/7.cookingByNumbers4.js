function cookingByNumbers(...params){
  let num = Number(params.shift());

  const funcShelf = {
    chop() {num /= 2},
    dice() {num = Math.sqrt(num)},
    spice() {num += 1},
    bake() {num *= 3},
    fillet(){num *= 0.8}
  }
params.forEach(command => {
    funcShelf[command]();
    console.log(num);
});
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')