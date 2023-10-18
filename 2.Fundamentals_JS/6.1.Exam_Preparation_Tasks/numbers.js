function numbers(string) {
  let array = string.split(" ").map(Number);

  let avrg = Math.floor(array.reduce((a, b) => a + b, 0) / array.length);

  array.sort((a, b) => b - a);
  let result = array.filter((a) => a > avrg);
  if (result.length === 0) {
    console.log("No");
  } else if (result.length < 4) {
    console.log(result.join(" "));
  } else {
    let result = array.slice(0, 5);
    console.log(result.join(" "));
  }
}
numbers("10 20 30 40 50");
