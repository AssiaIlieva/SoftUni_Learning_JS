function lastKNumbersSequence(n, k) {
  let arr = [1];

  while (arr.length < n) {
    let karr = arr.slice(-k);
    let sum = 0;

    for (let i = 0; i < karr.length; i++) {
      sum += karr[i];
    }
    arr.push(sum);
  }

  console.log(arr.join(" "));
}
lastKNumbersSequence(8, 2);
