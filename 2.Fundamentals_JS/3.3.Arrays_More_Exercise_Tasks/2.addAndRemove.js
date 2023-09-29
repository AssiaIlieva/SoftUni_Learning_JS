function addAndRemove(array) {
  let output = [];
  for (let i = 1; i <= array.length; i++) {
    let newCommand = array[i - 1];
    if (newCommand == "add") {
      output.push(i);
    } else {
      if (output.length > 0) {
        output.pop();
      }
    }
  }
  if (output.length == 0) {
    console.log("Empty");
  } else {
    console.log(output.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
