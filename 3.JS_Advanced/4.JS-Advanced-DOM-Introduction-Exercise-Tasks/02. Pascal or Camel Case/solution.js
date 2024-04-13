function solve() {
  let textInput = document.getElementById('text').value;
  textInput = textInput.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result = ''

  if(convention === 'Camel Case'){
    let arr = textInput.split(' ');
    for(let i = 1; i < arr.length; i++){
      let upperCase = arr[i][0].toUpperCase();
      arr[i] = upperCase + arr[i].slice(1);
    }
    result = arr.join('');

  } else if(convention === 'Pascal Case'){
    let arr = textInput.split(' ');
    for(let i = 0; i < arr.length; i++){
      let upperCase = arr[i][0].toUpperCase();
      arr[i] = upperCase + arr[i].slice(1);
    }
    result = arr.join('');
  }else{
    result = 'Error!'
  }
  let resultContainer = document.getElementById('result');
  resultContainer.textContent = result;
}