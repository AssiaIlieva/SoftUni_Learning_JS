function create(words) {
  let parentElement = document.getElementById('content');

  for(let i = 0; i < words.length; i++){
   let divElement = document.createElement('div');
   let paragraph = document.createElement('p');
   paragraph.textContent = words[i];
   paragraph.style.display = 'none'
   divElement.appendChild(paragraph);
   parentElement.appendChild(divElement)
   divElement.addEventListener('click', showParagraphs)
  }
  function showParagraphs(event){
   event.target.children[0].style.display = 'block'
  }
}