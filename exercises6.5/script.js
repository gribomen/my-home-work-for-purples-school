const balance = 2132;
const isBanned = false;
const bonusBalance = 85;
const isSelling = true;
const isExist = true;
const result = (balance > 1000 || bonusBalance > 100) && isSelling && isExist;
if(result){
    console.log('Игра куплена.');
}else{
    console.log('Игра нsе куплена');
}
