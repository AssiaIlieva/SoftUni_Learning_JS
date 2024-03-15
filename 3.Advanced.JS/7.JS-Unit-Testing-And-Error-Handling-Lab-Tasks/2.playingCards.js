function playingCards(face, suit) {
  let faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };
  if (!(suit == 'S'|| suit=='H'||suit=='D'|| suit=='C') || !/^[2-9]|10|[JQKA]$/.test(face)) {
    throw new Error("Error");
  }
  let card = {
    face,
    suit,
    toString() {
      return `${this.face}${suits[this.suit]}`;
    },
  };
  return card;
  
}

let card = playingCards("2", "C");
console.log(card.toString());
