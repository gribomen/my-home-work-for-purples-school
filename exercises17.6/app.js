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
    // console.log(document.querySelector('.notification').classList.add('notification_active'));
    // console.log(document.querySelector('.notification').classList.remove('notification_hidden'));
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class','notification');
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('key', 1);   
    document.querySelector('.notification').setAttribute('user-id', 1);
    console.log(Number(document.querySelector('.notification').getAttribute('user-id')))
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