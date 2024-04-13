class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }
  newAdditions(footballPlayers) {
    let updatedPlayers = [];
    for (let player of footballPlayers) {
      let [name, age, playerValue] = player.split("/");
      age = Number(age);
      playerValue = Number(playerValue);
      let isPlayerFound = false;

      for (let player of this.invitedPlayers) {
        if (player.name === name) {
          isPlayerFound = true;
          if (player.playerValue < playerValue) {
            player.playerValue = playerValue;
            updatedPlayers.push(name);
          }
          break;
        }
      }
      if (!isPlayerFound) {
        updatedPlayers.push(name);
        this.invitedPlayers.push({ name, age, playerValue });
      }
    }
    return `You successfully invite ${updatedPlayers.join(", ")}.`;
  }
  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);
    let isPlayerFound = false;
    for (let player of this.invitedPlayers) {
      if (player.name === name) {
        isPlayerFound = true;
        if (player.playerValue > offer) {
          let difference = player.playerValue - offer;
          throw new Error(
            `The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`
          );
        }
        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
      }
    }
    if (!isPlayerFound) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
  }
  ageLimit(name, age) {
    let isPlayerFound = false;
    for (let player of this.invitedPlayers) {
      if (player.name === name) {
        isPlayerFound = true;
        if (player.age >= age) {
          return `${name} is above age limit!`;
        }
        let ageDifference = age - player.age;
        if (ageDifference < 5) {
          return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else {
          return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
      }
    }
    if (!isPlayerFound) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
  }
  transferWindowResult() {
    let result = ["Players list:"];
    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    for (let player of this.invitedPlayers) {
      let newPlayer = `Player ${player.name}-${player.playerValue}`;
      result.push(newPlayer);
    }
    return result.join("\n");
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
