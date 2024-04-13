function maxSequenceEqualElements(array) {
  let previousElement = array[0];
  let maxSequence = [previousElement];
  let result = [];

  for (let i = 1; i < array.length; i++) {
    let newElement = array[i];
    if (newElement == previousElement) {
      maxSequence.push(newElement);
    } else {
      if (maxSequence.length > result.length) {
        result = maxSequence;
        maxSequence = [array[i]];
        previousElement = array[i];
      } else {
        maxSequence = [array[i]];
        previousElement = array[i];
      }
    }
  }
  maxSequence.length > result.length
    ? console.log(maxSequence.join(" "))
    : console.log(result.join(" "));
}
maxSequenceEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
