function lockedProfile() {
   Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));
  
    function onClick(ev){
       let profile = ev.target.parentElement;
       let isActive = profile.querySelector('input[value = "unlock"]').checked;
       if(isActive){
       let info = Array.from(profile.querySelectorAll('div'))
        .find(p => p.id.includes('HiddenFields'));
            if(ev.target.textContent == 'Show more'){
                info.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }else{
                ev.target.textContent = 'Show more';
                info.style.display = 'none';
            }
       }
    }  
}