function circleArea(parameter) {
  if (typeof parameter === "number") {
    let area = parameter * parameter * Math.PI;
    console.log(area.toFixed(2));
  } else {
    let type = typeof parameter;
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea("name");
