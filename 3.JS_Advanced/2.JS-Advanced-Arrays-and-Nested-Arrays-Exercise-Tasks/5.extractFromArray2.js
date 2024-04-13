function extractFromArray(array) {
  let biggestNumber = array[0];
  return array.reduce((acc, currEle) => {
    if (biggestNumber <= currEle) {
      acc.push(currEle);
      biggestNumber = currEle;
    }
    return acc;
  }, []);
}
extractFromArray([20, 3, 2, 15, 6, 1]);
