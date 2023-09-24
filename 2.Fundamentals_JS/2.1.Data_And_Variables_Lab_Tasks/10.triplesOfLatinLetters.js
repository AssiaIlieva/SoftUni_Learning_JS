function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      for (let j = 0; j < n; j++) {
        let char1 = String.fromCharCode(97 + i);
        let char2 = String.fromCharCode(97 + k);
        let char3 = String.fromCharCode(97 + j);
        console.log(`${char1}${char2}${char3}`);
      }
    }
  }
}
triplesOfLatinLetters(2);
