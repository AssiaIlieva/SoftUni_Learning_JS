window.addEventListener("load", solve);

function solve() {
  let inProgresUlEl = document.getElementById('in-progress');
  let finishedUlEl = document.getElementById('finished');
  let progressCountEl = document.getElementById('progress-count');
  let submitBtn = document.getElementById('form-btn');
  let clearBtn = document.getElementById('clear-btn');

  let firstNameEl = document.getElementById('first-name');
  let lastNameEl = document.getElementById('last-name');
  let ageEl = document.getElementById('age');
  let genderEl = document.getElementById('genderSelect');
  let dishInfoEl = document.getElementById('task')

  

  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(event){
    event.preventDefault();

    if(
    firstNameEl.value === '' ||
    lastNameEl.value === '' ||
      ageEl.value === ''||
      genderEl.value === '' ||
      dishInfoEl.value === ''
  ){
    return
  }
    
    let inProgressLiEl = document.createElement('li');
    inProgressLiEl.setAttribute('class', 'each-line');

    let inProgressArticleEl = document.createElement('article');

    let inProgressFullNameEl = document.createElement('h4');
    inProgressFullNameEl.textContent = `${firstNameEl.value} ${lastNameEl.value}`;

    let inProgressGenAgeEl = document.createElement('p');
    inProgressGenAgeEl.textContent = `${genderEl.value}, ${ageEl.value}`;

    let inProgressDescriptionEl = document.createElement('p');
    inProgressDescriptionEl.textContent = `Dish description: ${dishInfoEl.value}`;

    inProgressArticleEl.appendChild(inProgressFullNameEl);
    inProgressArticleEl.appendChild(inProgressGenAgeEl);
    inProgressArticleEl.appendChild(inProgressDescriptionEl);

    inProgressLiEl.appendChild(inProgressArticleEl);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'complete-btn');
    completeBtn.textContent = 'Mark as complete';

    inProgressLiEl.appendChild(editBtn);
    inProgressLiEl.appendChild(completeBtn);
    inProgresUlEl.appendChild(inProgressLiEl);

    let editFirstName = firstNameEl.value;
    let editLastName = lastNameEl.value;
    let editAge = ageEl.value;
    let editGender = genderEl.value;
    let editDishInfo = dishInfoEl.value

      firstNameEl.value = '';
      lastNameEl.value = '';
      ageEl.value = '';
      genderEl.value = '';
      dishInfoEl.value = '';

      progressCountEl.textContent = Number(progressCountEl.textContent) + 1;

      editBtn.addEventListener('click', onEdit);

      function onEdit(event){
      firstNameEl.value = editFirstName;
      lastNameEl.value = editLastName;
      ageEl.value = editAge;
      genderEl.value = editGender;
      dishInfoEl.value = editDishInfo;
      
      inProgressLiEl.remove();
      editBtn.remove();
      completeBtn.remove();
      progressCountEl.textContent = Number(progressCountEl.textContent) - 1;
      }

      completeBtn.addEventListener('click', onCompete);
      function onCompete(event){
        let finishArticle = inProgressArticleEl;
        let finishLiEl = document.createElement('li');
        finishLiEl.setAttribute('class', 'each-line');
        finishLiEl.appendChild(finishArticle);
        finishedUlEl.appendChild(finishLiEl);
        progressCountEl.textContent = Number(progressCountEl.textContent) - 1;
        inProgressLiEl.remove();
        editBtn.remove();
        completeBtn.remove();
      }

      clearBtn.addEventListener('click', onClear);
      function onClear(event){
        finishedUlEl.textContent = '';
      }

  }

}
