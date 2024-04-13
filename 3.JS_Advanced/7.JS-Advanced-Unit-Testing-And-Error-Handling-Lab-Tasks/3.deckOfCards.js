
function printDeckOfCards(cards) {
    function createCard(face, suit) {
      let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
      let suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
  
      if (!faces.includes(face) || !(suit == 'S' || suit == 'H' || suit == 'D' || suit == 'C')) {
        throw new Error(`Invalid card: ${face}${suit}`);
      }
  
      return `${face}${suits[suit]}`;
    }
  
    try {
      let result = cards.map(card => {
        let [face, suit] = [card.slice(0, -1), card.slice(-1)];
        return createCard(face, suit);
      });
  
      console.log(result.join(" "));
    } catch (error) {
      console.log(error.message);
    }
  }
printDeckOfCards(['AS', '10D', 'KH', '2C'])