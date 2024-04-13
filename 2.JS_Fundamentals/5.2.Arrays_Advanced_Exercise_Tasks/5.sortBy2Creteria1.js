function sortBy2Creteria(input) {
  let sortedByLength = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(sortedByLength.join("\n"));
}
sortBy2Creteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
