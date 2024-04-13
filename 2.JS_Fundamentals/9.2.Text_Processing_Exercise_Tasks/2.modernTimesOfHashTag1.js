function modernTimesOfHashTag(input) {
    let words = input.split(" ");
  
    for (let word of words) {
      if (word.startsWith("#") && word.length > 1) {
        let isSpecial = true;
  
        for (let i = 1; i < word.length; i++) {
          if (
            !(
              (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) ||
              (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)
            )
          ) {
            isSpecial = false;
            break;
          }
        }
  
        if (isSpecial) {
          console.log(word.substring(1));
        }
      }
    }
  }
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
