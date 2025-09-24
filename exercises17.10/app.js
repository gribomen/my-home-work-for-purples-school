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
    const json_object = JSON.stringify({
        text : input
    });
    localStorage.setItem('text',json_object);
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