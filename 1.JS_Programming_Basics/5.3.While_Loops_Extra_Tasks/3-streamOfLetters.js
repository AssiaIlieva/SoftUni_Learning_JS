function streamOfLetters(input){
    let index = 0;
    let symbol = input[index];
    let text = "";
    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;
    let word = "";
   
    while (symbol !== "End") {
      if ((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z")) {
        switch (symbol) {
          case "c":
            if (cCounter === 1) {
              word += symbol;
            } else {
              cCounter++;
            }
            break;
          case "o":
            if (oCounter === 1) {
              word += symbol;
            } else {
              oCounter++;
            }
            break;
          case "n":
            if (nCounter === 1) {
              word += symbol;
            } else {
              nCounter++;
            }
            break;
          default:
            word += symbol;
            break;
        }
      }
      if (cCounter === 1 && oCounter === 1 && nCounter === 1) {
        text += word + " ";
        cCounter = 0;
        oCounter = 0;
        nCounter = 0;
        word = "";
      }
   
      index++;
      symbol = input[index];
    }
    console.log(text);
}
streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End'])