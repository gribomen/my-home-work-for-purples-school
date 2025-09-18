'use strict'

const user= {
    firstname: 'Вася',
    lastname: 'Пупкин',
    age: 20,
    getUserInfo: function() {
        console.log(`${this.firstname} ${this.lastname}`)
        
        canDrink = () =>{
            if(this.age >= 18){
                console.log('Может бухнуть');
            }else {
                console.log('Не может бухнуть');
            }
        }
    },
    getUserInfoArrow: () => {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

canDrink();
user.getUserInfo();
user.getUserInfoArrow();
