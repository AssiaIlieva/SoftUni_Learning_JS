function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    let menuElement = document.getElementById('menu');
    
    if(newText !== '' || newValue !== ''){
        let option = document.createElement('option');
        option.text = newText;
        option.value = newValue;
        menuElement.appendChild(option);
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';

    }

}