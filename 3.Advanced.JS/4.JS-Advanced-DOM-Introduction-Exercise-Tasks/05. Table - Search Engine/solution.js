function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let textField = document.getElementById("searchField");
  let rows = document.querySelectorAll("tbody tr");

  function onClick() {
    for (let row of rows) {
      row.classList.remove("select");
      if (textField.value !== "" && row.innerHTML.includes(textField.value)) {
        row.className = "select";
      }
    }
    textField.value = "";
  }
}
