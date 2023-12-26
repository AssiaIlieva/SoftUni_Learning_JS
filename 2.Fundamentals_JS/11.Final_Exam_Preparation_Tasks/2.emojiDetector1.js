function emojiDetector(input) {
  let text = input[0];
  let coolThreshold = 1;

  let digitPattern = /\d/gm;

  let digits = digitPattern.exec(text);
  while (digits !== null) {
    let newDigit = Number(digits[0]);
    coolThreshold *= newDigit;
    digits = digitPattern.exec(text);
  }

  let emojiPattern = /(\*{2}|\:{2})([A-Z][a-z]{2,})\1/gm;

  let matches = text.matchAll(emojiPattern);

  let emojiFound = [];
  let coolEmoji = [];
  for (let match of matches) {
    let newEmoji = match[0];
      emojiFound.push(newEmoji);
    let newDigitAsciiSum = 0;
    for (let i = 2; i < newEmoji.length - 2; i++) {
      let value = newEmoji.charCodeAt(i);
      newDigitAsciiSum += value;
    }
    if (newDigitAsciiSum > coolThreshold) {
      coolEmoji.push(newEmoji);
    }
  }
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(
    `${emojiFound.length} emojis found in the text. The cool ones are:`
  );
  for (let emoji of coolEmoji) {
    console.log(emoji);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
