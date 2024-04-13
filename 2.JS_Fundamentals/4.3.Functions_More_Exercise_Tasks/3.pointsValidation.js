function poinsValidation([x1, y1, x2, y2]) {
  function firstPointCheck(x1, y1) {
    return Math.sqrt(x1 ** 2 + y1 ** 2);
  }

  function secondPointCheck(x2, y2) {
    return Math.sqrt(x2 ** 2 + y2 ** 2);
  }

  function bothPointsCheck(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  let resultFirstPointCheck = firstPointCheck(x1, y1);
  let resultSecondPointCheck = secondPointCheck(x2, y2);
  let resultBothPointsCheck = bothPointsCheck(x1, y1, x2, y2);

  if (resultFirstPointCheck % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (resultSecondPointCheck % 1 === 0) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (resultBothPointsCheck % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
poinsValidation([2, 1, 1, 1]);
