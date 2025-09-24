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

// document.querySelector('.input').addEventListener('keydown',(e)=>{
//     if(e.code == 'Enter'){
//         submitForm();
//     }
// })

const obj = JSON.parse('{ "a": 1 }');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str);