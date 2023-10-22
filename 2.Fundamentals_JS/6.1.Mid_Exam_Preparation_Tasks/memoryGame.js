function memoryGame(input) {
    let elements = input.shift().split(" ");
  
    for (let i = 0; i < input.length; i++) {
      let token = input[i].split(" ").sort((a, b) => a - b);
      if (token[0] === "end") {
        break;
      }
      let firstGuess = Number(token[0]);
      let secondGuess = Number(token[1]);
      isFirstGuessValid = (firstGuess >= 0 && firstGuess < elements.length) && firstGuess !== secondGuess;
      isSecondGuessValid = (secondGuess >= 0 && secondGuess < elements.length) && firstGuess !== secondGuess;
      if (isFirstGuessValid && isSecondGuessValid) {
        if (elements[firstGuess] === elements[secondGuess]) {
          console.log(
            `Congrats! You have found matching elements - ${elements[firstGuess]}!`
          );
          elements.splice(firstGuess, 1);
          elements.splice(secondGuess - 1, 1);
          if (elements.length === 0) {
            console.log(`You have won in ${i + 1} turns!`);
            return;
          }
        } else {
          console.log(`Try again!`);
        }
      } else {
        let newElement = `-${i + 1}a`;
        elements.splice(elements.length / 2, 0, newElement, newElement);
        console.log("Invalid input! Adding additional elements to the board");
      }
    }
    console.log(`Sorry you lose :(`);
    console.log(elements.join(" "));
  }
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    );
