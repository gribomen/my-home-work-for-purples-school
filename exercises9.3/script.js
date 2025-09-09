const arr = ['!','JS', 'люблю','Я'];
const arr_2 = [];

for (let index = arr.length; index >= 0; index--){
    arr_2.push(arr[index]);
}

console.log(arr_2.join(" "));