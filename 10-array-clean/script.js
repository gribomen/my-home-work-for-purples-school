arr = [1,2,4,-5,6,12,4,12,-2,0,7];
const fn = n => n < 5;
function filter(arr,fn){
    let bool  = true;
    let counter = 0;
    while (bool) {
        if(fn(arr[counter])){
            arr.splice(counter,1);
        }else{
            counter++;
        }
        console.log(counter +  " " + fn(arr[counter]));        
        if(arr.length == counter){
            bool = false;
        }
    }
    return arr;
}
console.log(filter(arr,fn));
