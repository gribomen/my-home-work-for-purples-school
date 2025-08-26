console.log(priceMacBook({age : 18, money: 2000, Iswork: false}));

function priceMacBook(person){
    if(person.money >= 2000){
        return "Он может купить MacBook";
    
    }else {
        if(isGetCredit(person)){
            return"Он может купить MacBook" ;
        }else{
            return "Он не может купить MacBook";
        }
    }
}

function isGetCredit(person){

    switch(true){
        case person.Iswork && (person.age > 24) :
            return (person.money + 500) >= 2000;
        break;
        case !person.Iswork && (person.age > 24) :
            return (person.money + 100) >= 2000;
        break;
        default:
            return false;
        break;
    }

}

