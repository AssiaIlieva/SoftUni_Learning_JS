function emojiDetector(input) {
  let text = input.shift();
  let threshold = text
    .match(/\d/g)
    .map(Number)
    .reduce((acc, value) => acc * value);
  console.log(`Cool threshold: ${threshold}`);

  let pattern = /(\:{2}|\*{2})([A-Z][a-z]{2,})\1/gm;
  

  let match = text.match(pattern);
  let count = 0
  if(match !== null){
    count = match.length;
  }
      console.log(`${count} emojis found in the text. The cool ones are:`);

  for (const emoji of match) {
    let chars = emoji.match(/[A-Za-z]/g);
    let charsSum = chars.map(a => a.charCodeAt()).reduce((a, b) => a + b);

    if (charsSum > threshold) {
      console.log(emoji);
    }
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
