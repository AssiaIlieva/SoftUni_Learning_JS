function addItem() {
    let liElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);
}