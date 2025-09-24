
document.querySelector("[operation=addition]").addEventListener('click',()=>{
    document.querySelector(".result").value = Number(document.querySelector(".first_number").value) + Number(document.querySelector(".two_number").value);
    document.querySelector(".first_number").value = "";
    document.querySelector(".two_number").value = "";        
});

document.querySelector("[operation=subtraction]").addEventListener('click',()=>{
    document.querySelector(".result").value = Number(document.querySelector(".first_number").value) - Number(document.querySelector(".two_number").value);
    document.querySelector(".first_number").value = "";
    document.querySelector(".two_number").value = "";
});

document.querySelector("[operation=multiplications]").addEventListener('click',()=>{
    document.querySelector(".result").value = Number(document.querySelector(".first_number").value) * Number(document.querySelector(".two_number").value);
    document.querySelector(".first_number").value = "";
    document.querySelector(".two_number").value = "";
});

document.querySelector("[operation=division]").addEventListener('click',()=>{
    document.querySelector(".result").value = Number(document.querySelector(".first_number").value) / Number(document.querySelector(".two_number").value);
    document.querySelector(".first_number").value = "";
    document.querySelector(".two_number").value = "";
});