const dollar = {
    ru: 80.53,
    cny: 7.15,
    eur: 0.858
}

const ruble = {
    usa: 0.012418,
    cny: 0.08941,
    eur: 0.01071

}

const yuan = {
    ru: 11.18,
    usa: 0.1398,
    eur: 0.12
}


function convertorCurrency(money,currency,convert_currency){
    if(money && currency && convert_currency){
        return calculateCurrency(money,currency,convert_currency);
    }else{
        return null;
    }
}

function calculateCurrency(money,currency,convert_currency){
    if(currency == "usa"){
        switch(true){
            case convert_currency == "ru":
                return money*dollar.ru
            break;
            case convert_currency == "cny":
                return money*dollar.cny
            break;
            case convert_currency == "eur":
                return money*dollar.eur
            break;
            default:
                return null
            break;
        }
    }
    
    if(currency == "ru"){
        switch(true){
            case convert_currency == "usa":
                return money*ruble.usa
            break;
            case convert_currency == "cny":
                return money*ruble.cny
            break;
            case convert_currency == "eur":
                return money*ruble.eur
            break;
            default:
                return null
            break;
        }
    }
    
    if(currency == "cny"){
        switch(true){
            case convert_currency == "ru":
                return money*yuan.ru
            break;
            case convert_currency == "usa":
                return money*yuan.usa
            break;
            case convert_currency == "eur":
                return money*yuan.eur
            break;
            default:
                return null
            break;
        }
    }
}

console.log(convertorCurrency(1000,"ru","usa"));