window.addEventListener("load", solve);

function solve() {
  let reviewUlEl = document.getElementById('review-list');
  let publishedUlEl = document.getElementById('published-list');

  let inputTitleEl = document.getElementById('post-title');
  let inputCategoryEl = document.getElementById('post-category');
  let inputContentEl = document.getElementById('post-content');

  let clearBtn = document.getElementById('clear-btn');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', (ev)=>{
    ev.preventDefault();

    if(inputTitleEl.value === '' ||
      inputCategoryEl.value === '' ||
    inputContentEl.value === ''){
      return
    }

    let h4TitleEl = document.createElement('h4');
    h4TitleEl.textContent = inputTitleEl.value;
    let pCategoryEl = document.createElement('p');
    pCategoryEl.textContent = `Category: ${inputCategoryEl.value}`;
    let pContentEl = document.createElement('p');
    pContentEl.textContent = `Content: ${inputContentEl.value}`;

    let articleReviewEl = document.createElement('article');
    articleReviewEl.appendChild(h4TitleEl);
    articleReviewEl.appendChild(pCategoryEl);
    articleReviewEl.appendChild(pContentEl);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'action-btn edit');
    editBtn.textContent = 'Edit';

    let approveBtn = document.createElement('button');
    approveBtn.setAttribute('class', 'action-btn approve');
    approveBtn.textContent = 'Approve';

    let liReviewEl = document.createElement('li');
    liReviewEl.setAttribute('class', 'rpost');
    liReviewEl.appendChild(articleReviewEl);
    liReviewEl.appendChild(approveBtn);
    liReviewEl.appendChild(editBtn);

    reviewUlEl.appendChild(liReviewEl);

    let editTitle = inputTitleEl.value;
    let editCategory = inputCategoryEl.value;
    let editContent = inputContentEl.value;

    inputTitleEl.value = '';
    inputCategoryEl.value = '';
    inputContentEl.value = '';

    editBtn.addEventListener('click', (ev)=>{
    inputTitleEl.value = editTitle;
    inputCategoryEl.value = editCategory;
    inputContentEl.value = editContent;
    liReviewEl.remove();
    })

    approveBtn.addEventListener('click', (ev)=>{
      let publishedArticle = articleReviewEl
      let liPublishedEl = document.createElement('li');
      liPublishedEl.setAttribute('class', 'rpost');
      liPublishedEl.appendChild(publishedArticle);
      publishedUlEl.appendChild(liPublishedEl);
      liReviewEl.remove();
    })

    clearBtn.addEventListener('click', (ev)=>{
      publishedUlEl.textContent = '';
    })

  })

}
