function solve() {
let [inputTextAreaEl, resultTextAreaEl] = document.querySelectorAll('textarea');
let [generateBtn, buyBtn] = document.querySelectorAll('button');
let tableBodyEl = document.querySelector('tbody');

generateBtn.addEventListener('click', generate);
buyBtn.addEventListener('click', buy);

function generate(e){
let data = JSON.parse(inputTextAreaEl.value);
for(let item of data){
  createRowAndAppend(item);

}
}
function createRowAndAppend(item){
  let tr = document.createElement('tr');
  tr.innerHTML += createTableData(`<img src=${item.img}>`);
  tr.innerHTML += createTableData(`<p>${item.name}</p>`);
  tr.innerHTML += createTableData(`<p>${item.price}</p>`)
  tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`)
  tr.innerHTML += createTableData(`<input type='checkbox'>`)
  tableBodyEl.appendChild(tr);
}
function createTableData(item){
  return `<td>${item}</td>`
}
function buy(e){
  let name = [];
  let price = 0;
  let sumDecFactor = 0;
  let selectedRows = document.querySelectorAll("input[type='checkbox']:checked");

  for(let checkbox of selectedRows){
    let[imgEl, nameEl, priceEl, decFactorEl] = Array.from(checkbox.parentElement.parentElement.children);
    let nameValue = nameEl.children[0].textContent;
    name.push(nameValue);
    let priceValue = Number(priceEl.children[0].textContent);
    price += priceValue;
    let decFactorValue = Number(decFactorEl.children[0].textContent);
    sumDecFactor += decFactorValue;
  }
  let result = `Bought furniture: ${name.join(', ')}\r\nTotal price: ${price.toFixed(2)}\r\nAverage decoration factor: ${sumDecFactor / name.length}`;
  resultTextAreaEl.value = result;
}

}