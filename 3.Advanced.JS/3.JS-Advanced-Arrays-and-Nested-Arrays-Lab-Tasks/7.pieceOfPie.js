function pieceOfPie(array, pie1, pie2) {
  startInx = array.indexOf(pie1);
  endInx = array.indexOf(pie2) + 1;
  let result = array.slice(startInx, endInx);
  return result;
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
