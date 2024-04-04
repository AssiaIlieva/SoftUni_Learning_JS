window.addEventListener('load', solve);

function solve() {
    let addButtonElement = document.getElementById('add');
    
    addButtonElement.addEventListener('click', (ev)=>{
        ev.preventDefault();
        const modelInputElement = document.getElementById('model');
        const yearInputElement = document.getElementById('year');
        const descriptionInputElement = document.getElementById('description');
        const priceInputElement = document.getElementById('price');
        const tableBodyElement = document.getElementById('furniture-list');
        const totalPriceElement = document.querySelector('.total-price');

        let model = modelInputElement.value;
        modelInputElement.value = '';
        let year = Number(yearInputElement.value);
        yearInputElement.value = '';
        let description = descriptionInputElement.value;
        descriptionInputElement.value = '';
        let price = Number(priceInputElement.value);
        priceInputElement.value = '';

        if(!model || !description){
            return;
        }
        if(year <=0 || price <=0){
            return;
        }

        let rowElement = document.createElement('tr');
        rowElement.classList.add('info')
        let moreInfoRowElement = document.createElement('tr');
        moreInfoRowElement.style.display
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionCellElement = document.createElement('td');

        let moreBtnElement = document.createElement('button');
        moreBtnElement.classList.add('moreBtn');
        moreBtnElement.innerText = 'More Info';
        moreBtnElement.addEventListener('click',(ev)=> {
            if(ev.currentTarget.textContent == 'More Info'){
                contentsRowElement.style.display = 'contents'
                ev.currentTarget.textContent = 'Less Info';

            }else{
                contentsRowElement.style.display = 'none';
                ev.currentTarget.textContent = 'More Info';
            }
        })

        let buyBtnElement = document.createElement('button');
        buyBtnElement.classList.add('buyBtn');
        buyBtnElement.innerText = 'Buy it';

        
        let contentsRowElement = document.createElement('tr');
        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';
        
        let yearContentElement = document.createElement('td');
        let describtionContentElement = document.createElement('td');
        
        yearContentElement.textContent = `Year: ${year}`;
        describtionContentElement.setAttribute('colspan', 3);
        describtionContentElement.textContent = `Description: ${description}`;
        
        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(describtionContentElement);
        
        
        
        actionCellElement.appendChild(moreBtnElement);
        actionCellElement.appendChild(buyBtnElement);
        
        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);
        
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);
        
        tableBodyElement.appendChild(rowElement);
        tableBodyElement.appendChild(contentsRowElement);
        
        buyBtnElement.addEventListener('click', (ev)=>{
            let currTotalPrice = Number(totalPriceElement.textContent);
            currTotalPrice += Number(price);
            totalPriceElement.textContent = currTotalPrice.toFixed(2);
            rowElement.remove();
            contentsRowElement.remove();

        })
        

    })

}
