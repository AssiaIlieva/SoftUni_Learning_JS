function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let secondNum = document.getElementById('secondNumber');
    let valueFirstNum = Number(firstNum.value);
    let valueSecondNum = Number(secondNum.value);
    let substraction = valueFirstNum - valueSecondNum;
    let result = document.getElementById('result');
    result.textContent = substraction;
}