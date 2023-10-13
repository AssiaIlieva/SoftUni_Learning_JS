function sortBy2Creteria(input) {
  let sortedByLength = input.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });
  console.log(sortedByLength.join("\n"));
}
sortBy2Creteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
