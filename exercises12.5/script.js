const num1 ='89103235356';
const num2 ='+79103235356';
const num3 ='+7(910)3235356';
const num4 ='+7(910) 323-53-56';
const num5 =' +7(910) 323-53-56  ';

const num1Error ='89103235';
const num2Error ='+7d910d323-53-56';
const num3Error ='9+7103235356';
const num4Error ='89103g35356';

console.log(isNumber(num5));
function isNumber(num){
    let bool = true;
    num = num.trim();
    if(num.length < 11){
        bool = false;
    }else{
        num = num.replaceAll("-","");
        num = num.replaceAll(" ","");
        num = num.split("");
        const num_arr = ['0','1','2','3','4','5','6','7','8','9','+','(',')'];
        console.log(num);
        num.forEach((element, index, array) => {

            if (element == "+"){
                if(array.indexOf("+") !== 0 && array.indexOf("7") !== 1){
                    bool = false;
                }
            }

            if(element == "("){
                if(!(element.indexOf("(") == 1 || element.indexOf("(") != 2) && !(element.indexOf(")") != 6 || element.indexOf(")") != 7)){
                    bool = false;
                }
            }
            
            if(element == ")"){
                if(!(element.indexOf("(") == 1 || element.indexOf("(") != 2) && !(element.indexOf(")") != 6 || element.indexOf(")") != 7)){
                    bool = false;    
                }
            }

            if(bool){
                bool = num_arr.includes(element);
            }

            console.log(element + " " + bool);
        });
    }
    return bool;
}

