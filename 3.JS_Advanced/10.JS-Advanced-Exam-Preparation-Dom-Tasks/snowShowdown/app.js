window.addEventListener("load", solve);

function solve() {
  let previewUlEl = document.querySelector('.snowman-preview');
  let showUlEl = document.querySelector('.snow-list');
  let imgEl = document.getElementById('back-img');
  let mainEl = document.getElementById('hero');
  let bodyEl = document.querySelector('.body');

  let inputNameEl = document.getElementById('snowman-name');
  let inputSmEl = document.getElementById('snowman-height');
  let inputLocationEl = document.getElementById('location');
  let inputCreatorEl = document.getElementById('creator-name');
  let inputAttributeEl = document.getElementById('special-attribute');

  const addButton = document.querySelector('.add-btn');

  addButton.addEventListener('click', (ev)=>{
    ev.preventDefault();

    if(
      inputNameEl.value === '' ||
    inputSmEl.value === '' ||
    inputLocationEl.value === '' ||
    inputCreatorEl.value === '' ||
    inputAttributeEl.value === ''
    ){
      return;
    }
    
    let name = inputNameEl.value;
    let sentimeters = inputSmEl.value;
    let location = inputLocationEl.value;
    let creator = inputCreatorEl.value;
    let attribute = inputAttributeEl.value;

    let editName = inputNameEl.value;
    let editSentimeters = inputSmEl.value;
    let editLocation = inputLocationEl.value;
    let editCreator = inputCreatorEl.value;
    let editAttribute = inputAttributeEl.value;

    let previewArticleEl = document.createElement('article');
    let previewDivBtnEl = document.createElement('div');
    previewDivBtnEl.setAttribute('class', 'btn-container');
    let previewLiEl = document.createElement('li');
    previewLiEl.setAttribute('class', 'snowman-info');

    let pNameEl = document.createElement('p');
    pNameEl.textContent = `Name: ${name}`;
    let pSentEl = document.createElement('p');
    pSentEl.textContent = `Height: ${sentimeters}`;
    let pLocationEl = document.createElement('p');
    pLocationEl.textContent = `Location: ${location}`;
    let pCreatorEl = document.createElement('p');
    pCreatorEl.textContent = `Creator: ${creator}`;
    let pAttributeEl = document.createElement('p');
    pAttributeEl.textContent = `Attribute: ${attribute}`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';
    let nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    previewArticleEl.appendChild(pNameEl);
    previewArticleEl.appendChild(pSentEl);
    previewArticleEl.appendChild(pLocationEl);
    previewArticleEl.appendChild(pCreatorEl);
    previewArticleEl.appendChild(pAttributeEl);

    previewDivBtnEl.appendChild(editBtn);
    previewDivBtnEl.appendChild(nextBtn);

    previewLiEl.appendChild(previewArticleEl);
    previewLiEl.appendChild(previewDivBtnEl);

    previewUlEl.appendChild(previewLiEl);

    inputNameEl.value = '';
    inputSmEl.value = '';
    inputLocationEl.value = '';
    inputCreatorEl.value = '';
    inputAttributeEl.value = '';

    addButton.disabled = true;

    editBtn.addEventListener('click', (ev)=>{
    inputNameEl.value = editName;
    inputSmEl.value = editSentimeters;
    inputLocationEl.value = editLocation;
    inputCreatorEl.value = editCreator;
    inputAttributeEl.value = editAttribute;

    addButton.disabled = false;

    previewLiEl.remove();

    })

    nextBtn.addEventListener('click', (ev)=>{
      let showArticleEl = document.createElement('article');
      showArticleEl.style.display = 'flex';
     

    let pNameEl = document.createElement('p');
    pNameEl.textContent = `Name: ${name}`;
    let pSentEl = document.createElement('p');
    pSentEl.textContent = `Height: ${sentimeters}`;
    let pLocationEl = document.createElement('p');
    pLocationEl.textContent = `Location: ${location}`;
    let pCreatorEl = document.createElement('p');
    pCreatorEl.textContent = `Creator: ${creator}`;
    let pAttributeEl = document.createElement('p');
    pAttributeEl.textContent = `Attribute: ${attribute}`;

      let sendBtn = document.createElement('button');
      sendBtn.setAttribute('class', 'send-btn');
      sendBtn.textContent = 'Send'

      showArticleEl.appendChild(pNameEl);
      showArticleEl.appendChild(pSentEl);
      showArticleEl.appendChild(pLocationEl);
      showArticleEl.appendChild(pCreatorEl);
      showArticleEl.appendChild(pAttributeEl);
      showArticleEl.appendChild(sendBtn);

      let showLiEl = document.createElement('li');
      showLiEl.setAttribute('class', 'snowman-content');
      showLiEl.appendChild(showArticleEl);
      showUlEl.appendChild(showLiEl);

      previewLiEl.remove();

      sendBtn.addEventListener('click', (ev)=>{
        mainEl.remove();
        let backBtn = document.createElement('button');
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';
        bodyEl.appendChild(backBtn);
        imgEl.style.display = 'block';

        backBtn.addEventListener('click', (ev)=>{
          window.location.reload();
        })

      })
    })
    
    

  })
}
