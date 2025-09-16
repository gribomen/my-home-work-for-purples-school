const obj = {
    search:'Вася',
    take:10
}

function query(obj){
    return Object.keys(obj).reduce((acc,item)=>{
        return acc ? acc + "$" + item + "=" + obj[item]: "?"+item + "=" + obj[item];
    },0)
}

console.log(query(obj));