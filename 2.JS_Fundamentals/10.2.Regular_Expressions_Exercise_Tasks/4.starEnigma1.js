function starEnigma(input) {
  let num = Number(input[0]);
  let attackPlanet = [];
  let destroyedPlanet = [];
  let pattern =
    /[^@\-!:>]*@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>A|D)![^@\-!:>]*\->(?<soldier>\d+)[^@\-!:>]*/;
  for (let i = 1; i <= num; i++) {
    let newLine = input[i];
    let charArr = newLine.toLowerCase().split("");
    let specialCharArr = charArr.filter(
      (x) => x === "s" || x === "t" || x === "r" || x === "a"
    );
    let valueToRemove = specialCharArr.length;
    let decryptLine = "";
    for (let char of newLine) {
      let decreasedCharValue = char.charCodeAt(0) - valueToRemove;
      let decreasedChar = String.fromCharCode(decreasedCharValue);
      decryptLine += decreasedChar;
    }
    let match = decryptLine.match(pattern);
    if (match) {
      let { planet, attack } = match.groups;
      if (attack === "A") {
        attackPlanet.push(planet);
      } else if (attack === "D") {
        destroyedPlanet.push(planet);
      }
    }
  }
  console.log(`Attacked planets: ${attackPlanet.length}`);
  attackPlanet.sort((a, b) => a.localeCompare(b)).forEach((element) => {
    console.log(`-> ${element}`);
  });
  console.log(`Destroyed planets: ${destroyedPlanet.length}`);
  destroyedPlanet.sort((a, b) => a.localeCompare(b)).forEach((element) => {
    console.log(`-> ${element}`);
  });
}
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
