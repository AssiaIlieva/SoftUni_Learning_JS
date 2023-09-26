function chessBoard(n) {
  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= n; i++) {
    console.log("   <div>");
    for (let j = 1; j <= n; j++) {
      let color = "";
      if ((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) {
        color = "black";
      } else {
        color = "white";
      }
      console.log(`     <span class="${color}"></span>`);
    }
    console.log("   </div>");
  }
  console.log("</div>");
}
chessBoard(3);
