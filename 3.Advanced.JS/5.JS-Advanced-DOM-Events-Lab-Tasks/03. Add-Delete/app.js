function addItem() {
    let itemsElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    liElement.appendChild(deleteElement);
    itemsElements.appendChild(liElement);

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    }
    )
}