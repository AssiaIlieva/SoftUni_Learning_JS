  function fancyBarcodes(input) {
  let n = Number(input.shift());
  let pattern = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/gm;

  for (let i = 0; i < n; i++) {
    let validBarcode = input.shift().match(pattern);
    if (!validBarcode) {
      console.log(`Invalid barcode`);
    } else {
      let productGroup = "";
      let barcodeGroupCheck = validBarcode[0];

      let digits = barcodeGroupCheck.matchAll(/\d+/g);
      for (let digit of digits) {
        productGroup += digit;
      }
      if (productGroup === "") {
        productGroup = "00";
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
