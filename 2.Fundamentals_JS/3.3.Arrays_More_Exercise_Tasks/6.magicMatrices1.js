function magicMatrices(matrix) {
  let isMagic = true;
  if (matrix.length === 0) {
    isMagic = false;
    console.log(isMagic);
    return; // Матрицата е празна
  }

  // Намиране на очакваната сума на първия ред
  const expectedSum = matrix[0].reduce((acc, current) => acc + current, 0);

  // Проверка на сумите на редовете
  for (let row of matrix) {
    if (row.reduce((acc, current) => acc + current, 0) !== expectedSum) {
      isMagic = false;
      console.log(isMagic);
      return;
    }
  }

  // Проверка на сумите на колоните
  const numColumns = matrix[0].length;
  for (let col = 0; col < numColumns; col++) {
    const colSum = matrix.reduce((acc, row) => acc + row[col], 0);
    if (colSum !== expectedSum) {
      isMagic = false;
      console.log(isMagic);
      return
    }
  }

  // Ако всички проверки са минали успешно, матрицата е магична
  

  console.log(isMagic);
}
  magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])