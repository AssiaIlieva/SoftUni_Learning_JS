function deserializeString(input) {
  let index = 0;
  let newElement = input[index];
  let obj = {};
  while (newElement !== "end") {
    let array = newElement.split(":");
    let char = array[0];
    let indexArr = array[1].split("/").map((x) => Number(x));
    indexArr.forEach((element) => {
      obj[element] = char;
    });

    index++;
    newElement = input[index];
  }
  let string = "";
  for (let key in obj) {
    string += obj[key];
  }
  console.log(string);
}
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
