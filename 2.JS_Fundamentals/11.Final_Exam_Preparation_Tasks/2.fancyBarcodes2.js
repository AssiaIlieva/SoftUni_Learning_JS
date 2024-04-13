function fancyBarcodes(input) {
  let n = input.shift();
  let regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;

  input.forEach((line) => {
    if (regex.test(line)) {
      let tokens = regex.exec(line);
      let barcode = tokens[2];
      let numbers = [...barcode].filter((char) => /\d/g.test(char)).join("");
      if (numbers === "") {
        numbers = "00";
      }
      console.log(`Product group: ${numbers}`);
    } else {
      console.log(`Invalid barcode`);
    }
  });
}
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
