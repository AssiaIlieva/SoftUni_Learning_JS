function search() {
  let userWord = document.getElementById("searchText").value;
  let townsElement = Array.from(document.querySelectorAll("#towns li"));
  let match = document.getElementById("result");
  let counter = 0;

  for (let town of townsElement) {
    if (town.textContent.includes(userWord)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
    }
  }
  match.textContent = `${counter} matches found`;
}
