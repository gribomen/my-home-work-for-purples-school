const arr = ['10-02-2022', 'тест', '1j/1g/2f23', '00/13/2022', '41/12/2023', '15.05.2012'];

function processingArrays(arr){
    return arr.filter(element => element.length === 10)
    .map(element=> {
        const new_arr = element.slice("");
        return [[new_arr[0]+new_arr[1]],[new_arr[3] + new_arr[4]],[new_arr[6] + new_arr[7] + new_arr[8] + new_arr[9]]];
    }).filter( element =>{

        if(!(typeof Number(element[0]) == "number" && Number(element[0]) < 32 && Number(element[0]) > 0)){
            return false;
        }

        if(!(typeof Number(element[1]) == "number" && Number(element[1]) < 13 && Number(element[1]) > 0)){
            return false;
        }

        if(!(typeof Number(element[2]) == "number" && Number(element[1]) > 0)){
            return false;
        }

        if(Number(element[2])%4 == 0 && Number(element[1]) == 2){
            if(!(Number(element[0]) < 30 && Number(element[0]) > 0)){
                return false;
            }
        }

        if(Number(element[2])%4 != 0 && Number(element[1]) == 2){
            if(!(Number(element[0]) < 29 && Number(element[0]) > 0)){
                return false;
            }
        }

        return true;

    }).map(element=>{

        return element.join("-");

    });
}
console.log(processingArrays(arr));