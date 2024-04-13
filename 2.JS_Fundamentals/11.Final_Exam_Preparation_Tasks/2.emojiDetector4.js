function emojiDetector(input) {
  let text = input[0];
  let emojiRegex = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/gm;
  let digitsRegex = /\d/g;
  let coolThreshold = text
    .match(digitsRegex)
    .map(Number)
    .reduce((acc, value) => acc * value);
  console.log(`Cool threshold: ${coolThreshold}`);
  let coolEmojies = [];
  let count = 0;

  for (const emoji of text.matchAll(emojiRegex)) {
    count++;
    let newEmoji = emoji[2];
    let emojiSum = newEmoji
      .split("")
      .reduce((acc, value) => acc + value.charCodeAt(), 0);
    if (emojiSum > coolThreshold) {
      coolEmojies.push(emoji[0]);
    }
  }
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(`${coolEmojies.join("\n")}`);
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
