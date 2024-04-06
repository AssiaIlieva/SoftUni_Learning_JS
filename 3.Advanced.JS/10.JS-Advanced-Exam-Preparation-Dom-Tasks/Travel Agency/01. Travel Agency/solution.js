window.addEventListener('load', solution);

function solution() {
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview')

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  const lableValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();

  submitButton.addEventListener('click', (ev) => {
    const fullName = inputValues[0];
    const email = inputValues[1];
  
    if(fullName.value && email.value !== ''){
      for(let i = 0; i < inputValues.length; i++){
        const liElement = document.createElement('li');
        liElement.textContent = `${lableValues[i].innerText} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }
      for(let input of inputValues){
        input.value = '';
      }
      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
    
  })

  editButton.addEventListener('click', (ev) => {
    const listItems = Array.from(preview.childNodes);
    for(let i = 0; i < inputValues.length; i++){
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  
  })

  continueButton.addEventListener('click', (ev)=>{
    block.innerHTML = '';
    const message = document.createElement('h3');
    message.textContent = 'Thank you for your reservation!'
    block.appendChild(message);

  })
}
