function emojiDetector([input]) {
  let [emojies, cnt] = [[], 0];
  let pattern = /(\*{2}|:{2})([A-Z][a-z]{2,})\1/g;
  let cool = input.match(/\d/g).reduce((acc, val) => acc * val);
  for (let match of input.matchAll(pattern)) {
      let sum = match[2].split('').reduce((acc, val) => acc + val.charCodeAt(), 0);
      if (sum >= cool) emojies.push(match[0]);
      cnt++;
  }
  console.log(`Cool threshold: ${cool}\n${cnt} emojis found in the text. The cool ones are:\n${emojies.join('\n')}`);
  }
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
