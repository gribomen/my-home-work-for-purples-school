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

const arr_div = document.querySelectorAll('div');
arr_div.forEach(item=>{
    if(item.classList =="one"){
        console.log(item.innerText);
    }
    if(item.classList ==""){
        console.log(item.innerText);
    }
});

// document.querySelector('.input').addEventListener('keydown',(e)=>{
//     if(e.code == 'Enter'){
//         submitForm();
//     }
// })