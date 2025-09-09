const operations = [1000, -100, 300, -500, 10000];

let income = 0, expenses = 0, sum = 100;
let counter_income = 0, counter_expenses = 0;
let calculating_balance = true;
for (let index in operations) {
    switch (true){
        case operations[index] > 0: {
            income += operations[index];
            counter_income += 1;
            sum += operations[index];
            break;
        }
        case operations[index] < 0: {
            expenses += operations[index];
            counter_expenses +=1;
            sum += operations[index];
            break;
        }
    }

    if(sum < 0){
        calculating_balance = false;
        break; 
    }
    console.log(`На ${Number(index)+1} шаге сумма : ${sum}`);
}

if(calculating_balance){
    console.log(`Итоговый баланс ${sum}`);
    console.log(`Средний доход: ${income/counter_income}`);
    console.log(`Средний расход: ${expenses/counter_expenses}`);
}else{
    console.log(`Итоговый баланс расчитать не возможно возник отрицательный баланс`);
}