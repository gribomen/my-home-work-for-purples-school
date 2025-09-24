const user ={
    login: 'example@mail.com',
    password: '12345'
};

function removePassword(reset) {
    if(reset){
        this.password = undefined;
    }else{
        this.password = '1';
    }
}

const removePasswordUser =  removePassword.bind(user,false);
removePasswordUser();
console.log(user);