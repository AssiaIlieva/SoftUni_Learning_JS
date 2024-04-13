function streamOfLetters(input){
  let index = 0;
  let symbol = input[index];
  let word = "";
  let text = "";
  let nCounter = 0;
  let cCounter = 0;
  let oCounter = 0;

  while(symbol !== "End"){
    if((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z")){
          switch(symbol){
            case "n":
              if(nCounter === 1){
                word += symbol
              }else{
                nCounter++;
              }
              break;
              case "c":
                if(cCounter === 1){
                  word += symbol
                }else{
                  cCounter++;
                }
                break;
                case "o":
                  if(oCounter === 1){
                    word += symbol
                  }else{
                    oCounter++;
                  }
                  break;
                default:
                  word += symbol;
                  break;              
          }
          if(nCounter === 1 && cCounter === 1 && oCounter === 1){
            text += word + " ";
            nCounter = 0;
            cCounter = 0;
            oCounter = 0;
            word = "";
          }
    }
          index++;
          symbol = input[index];
  }
        console.log(text);
}
streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End'])