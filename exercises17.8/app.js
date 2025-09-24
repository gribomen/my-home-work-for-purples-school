'use strict';

// document.querySelector('.button').addEventListener('click', function(){
//     const input =  document.querySelector('.input').value;
//     console.log(input);
//     if(!input){
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function submitForm(){
    const input =  document.querySelector('.input').value;
    if(!input){
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    console.log(document.querySelector('.notification').getAttribute('class'));
    
}

function inputChanged(e){
    if (e.code == 'Enter'){
        submitForm();
    }
}

const panelText = 'Панель';
const panelClass = 'button'
const newElement = document.createElement('div');
newElement.setAttribute('user-id',1);
newElement.classList.add('panel');
newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</div>`

document.querySelector('.test').appendChild(newElement);
// document.querySelector('.input').addEventListener('keydown',(e)=>{
//     if(e.code == 'Enter'){
//         submitForm();
//     }
// })

localStorage.setItem('token','asdsdfdds');
localStorage.setItem('token1','1');
localStorage.setItem('token1',true);
console.log(typeof localStorage.getItem('token1'));
localStorage.removeItem('token1');
localStorage.clear();