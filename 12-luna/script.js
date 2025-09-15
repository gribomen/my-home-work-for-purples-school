const card = '4561-2612-1234-5464';
console.log(luna(card));
function luna(card){
    return card.split("-").reduce((acc,element)=> acc+= element.split("").reduce((acc2,item,index)=> {
        let num = Number(item);
        if((index%2)===0){
            if((num*2)>9){
                return acc2 + (num * 2)-9;
            }else{
                return acc2= acc2 + (num*2);
            }
        }
        if((index%2) === 1){
            return acc2= acc2 + num;           
        }
    },0),0) % 10 === 0;
}