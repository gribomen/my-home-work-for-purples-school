const KG_IN_USD = 7;
const KM_IN_USD = 5;

function getExchangePrice(present, distance){
    const price1 = present[0]*KG_IN_USD;
    const price2 = present[1]*KM_IN_USD;
    const distancePrice = distance*KM_IN_USD;
    return price1+price2+distancePrice;
}

function calculateW(present){
    return present*KG_IN_USD;
}

function calculateW(present){
    return present*KM_IN_USD;
}

console.log(getExchangePrice([1,2],10));