function deleteByEmail() {
   let inputEmailElement = document.querySelector('input[name="email"]');
   let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
   let resultElement = document.getElementById('result');

   emailCellElements = Array.from(emailCellElements);

   let targetElement = emailCellElements.find;( x => x.textContent == inputEmailElement.value);
    if(targetElement){
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    }else{
        resultElement.textContent = 'Not found.'
    }
}