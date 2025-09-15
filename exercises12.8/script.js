const card = "2342834503458353";
console.log(hidenCardNumber(card));
function hidenCardNumber(card){
    return((Array.from({length: card.length-4},(cur,i)=>"*")).join("") + card.split("").splice(-4).join(""));
}
let str = 'How are you?';
str = str.padStart(5, '%');
console.log(str);