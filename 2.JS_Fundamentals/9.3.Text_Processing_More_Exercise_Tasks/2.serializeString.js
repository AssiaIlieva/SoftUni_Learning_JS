function serializeString(input) {
  let string = input[0];
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!obj.hasOwnProperty(char)) {
      obj[char] = [i];
    } else {
      obj[char].push(i);
    }
  }
  let result = Object.entries(obj);
  result.forEach((element) => {
    console.log(`${element[0]}:${element[1].join("/")}`);
  });
}
serializeString(["avjavamsdmcalsdm"]);
