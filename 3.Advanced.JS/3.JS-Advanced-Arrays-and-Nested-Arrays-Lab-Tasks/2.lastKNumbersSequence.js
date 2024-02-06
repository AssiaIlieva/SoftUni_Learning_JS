function lastKNumbers(n, k) {
    let result = [1];
    
    for (let i = 1; i < n; i++) {
      let startIndex = Math.max(0, i - k);
      let currentSum = result.slice(startIndex, i).reduce((a, b) => a + b, 0);
      result.push(currentSum);
    }
    return result;
  }
lastKNumbers(6, 3)
