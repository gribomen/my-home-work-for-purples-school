const arr = [2, 4, 4, 10, 20];

function some(arr,element_arr){
    let bool = false;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == element_arr){
            bool = true;
            break;
        }
    }
    return bool;
}

console.log(some(arr,0));
console.log(arr.some(el => el == 20));