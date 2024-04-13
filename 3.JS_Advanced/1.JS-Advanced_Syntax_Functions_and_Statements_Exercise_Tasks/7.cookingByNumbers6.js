function cookingByNumbers(...commands){
  let num = Number(commands.shift());

  const parser = {
    chop: x => x / 2,
    dice: x => Math.sqrt(x),
    spice: x => x + 1,
    bake: x => x * 3,
    fillet: x => x * 0.8
  };

  commands.forEach(comand => {
  num = parser[comand](num);
  console.log(num);    
  });
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')