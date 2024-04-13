function starEnigma(arr) {
  let msgsCount = Number(arr.shift());
  let decryptedMsgs = [];
  let charPattern = /[stra]/gi;

  for (let i = 0; i < msgsCount; i++) {
    let message = arr[i];
    let decryptedMessage = "";
    let matches = message.match(charPattern);
    if (matches) {
      let count = matches.length;
      for (let char of message) {
        let code = char.charCodeAt();
        code -= count;
        let newChar = String.fromCharCode(code);
        decryptedMessage += newChar;
      }
    } else {
      decryptedMessage = message;
    }
    decryptedMsgs.push(decryptedMessage);
  }
  let planetPattern =
    /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>A|D)![^@\-!:>]*\->(?<soldier>\d+)/;
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let msg of decryptedMsgs) {
    let match = msg.match(planetPattern);
    if (match) {
      let { planet, attack } = match.groups;
      if (attack === "A") {
        attackedPlanets.push(planet);
      } else {
        destroyedPlanets.push(planet);
      }
    }
  }
  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets
    .sort((a, b) => a.localeCompare(b))
    .forEach((element) => {
      console.log(`-> ${element}`);
    });
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets
    .sort((a, b) => a.localeCompare(b))
    .forEach((element) => {
      console.log(`-> ${element}`);
    });
}
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
