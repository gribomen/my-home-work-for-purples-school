let arr = [1, 40, -5, 10, 0];
console.log(sort(arr));



function sort(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i ; j < arr.length; j++){
            if(arr[i] < arr[j]){
                const change = arr[i];
                arr[i] = arr[j];
                arr[j] = change;
            }
        }
    }
    return arr;
}