window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('publish');
  let tBodyEl = document.getElementById('table-body');
  let soldUlEl = document.getElementById('cars-list');
  let profitStrongEl = document.getElementById('profit');

  let inputMakeEl = document.getElementById('make');
  let inputModelEl = document.getElementById('model');
  let inputYearEl = document.getElementById('year');
  let inputFuelEl = document.getElementById('fuel');
  let inputOrgCostEl = document.getElementById('original-cost');
  let inputSellPriceEl = document.getElementById('selling-price');

  publishBtn.addEventListener('click', (ev)=>{
    ev.preventDefault();
    
  let make = inputMakeEl.value;
  let model = inputModelEl.value;
  let year = inputYearEl.value;
  let fuel = inputFuelEl.value;
  let orgCost= inputOrgCostEl.value;
  let sellPrice = inputSellPriceEl.value;

  if(inputMakeEl.value === '' ||
    inputModelEl.value === '' ||
    inputYearEl.value === '' ||
    inputFuelEl.value === '' ||
    inputOrgCostEl.value === '' ||
    inputSellPriceEl.value === '' ||
    inputOrgCostEl.value >  inputSellPriceEl.value
  ){
    return;
  }

  let editMake = make;
  let editModel = model;
  let editYear = year;
  let editFuel = fuel;
  let editOrgCost= orgCost;
  let editSellPrice = sellPrice;

  let tRowEl = document.createElement('tr');
  tRowEl.setAttribute('class', 'row');
  let editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'action-btn edit');
  editBtn.textContent = "Edit";
  let sellBtn = document.createElement('button');
  sellBtn.setAttribute('class', 'action-btn sell');
  sellBtn.textContent = 'Sell';

  let tdMakeEl = document.createElement('td');
  tdMakeEl.textContent = make;
  let tdModelEl = document.createElement('td');
  tdModelEl.textContent = model;
  let tdyearEl = document.createElement('td');
  tdyearEl.textContent = year;
  let tdfuelEl = document.createElement('td');
  tdfuelEl.textContent = fuel;
  let tdOrgCostEl = document.createElement('td');
  tdOrgCostEl.textContent = orgCost;
  let tdSellPriceEl = document.createElement('td');
  tdSellPriceEl.textContent = sellPrice;
  let tdButtonsEl = document.createElement('td');
  tdButtonsEl.appendChild(editBtn);
  tdButtonsEl.appendChild(sellBtn);

  tRowEl.appendChild(tdMakeEl);
  tRowEl.appendChild(tdModelEl);
  tRowEl.appendChild(tdyearEl);
  tRowEl.appendChild(tdfuelEl);
  tRowEl.appendChild(tdOrgCostEl);
  tRowEl.appendChild(tdSellPriceEl);
  tRowEl.appendChild(tdButtonsEl);

  tBodyEl.appendChild(tRowEl);

    inputMakeEl.value = '';
    inputModelEl.value = '';
    inputYearEl.value = '';
    inputFuelEl.value = '';
    inputOrgCostEl.value = '';
    inputSellPriceEl.value = '';

  editBtn.addEventListener('click', (ev)=>{
    inputMakeEl.value = editMake;
    inputModelEl.value = editModel;
    inputYearEl.value = editYear;
    inputFuelEl.value = editFuel;
    inputOrgCostEl.value = editOrgCost;
    inputSellPriceEl.value = editSellPrice;
    tRowEl.remove();
  })
  sellBtn.addEventListener('click', (ev)=>{
    let calcProfit = Number(sellPrice) - Number(orgCost);

    let carSpanEl = document.createElement('span');
    carSpanEl.textContent = `${make} ${model}`;
    let yearSpanEl = document.createElement('span');
    yearSpanEl.textContent = year;
    let carProfitSpanEl = document.createElement('span');
    carProfitSpanEl.textContent = calcProfit;

    let liSoldEl = document.createElement('li');
    liSoldEl.setAttribute('class', 'each-list')
    liSoldEl.appendChild(carSpanEl);
    liSoldEl.appendChild(yearSpanEl);
    liSoldEl.appendChild(carProfitSpanEl);
    soldUlEl.appendChild(liSoldEl);

    profitStrongEl.textContent = (Number(profitStrongEl.textContent) + calcProfit).toFixed(2);

    tRowEl.remove();

  })
  })
}
