function fancyBarcodes(input) {
  let num = Number(input.shift());
  let pattern = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/gm;

  for (let i = 0; i < num; i++) {
    let newCode = input.shift();
    let validCode = newCode.match(pattern);

    if (validCode === null) {
      console.log(`Invalid barcode`);
    } else {
      let digits = validCode[0].match(/\d+/g);
      let productGroup = "";
      if (!digits) {
        productGroup = "00";
      } else {
        productGroup = digits.join("");
      }
      console.log(`Product group: ${productGroup}`);
    }
  }
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
