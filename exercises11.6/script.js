const arr = [1, 4, 4, 10];
const avg =  arr.reduce((acc,item,index,array)=>acc+item/array.length,0);
console.log(avg);