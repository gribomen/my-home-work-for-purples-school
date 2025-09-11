const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);

const operation = [100, -300, -100, 50, 480];
console.log(operation);

// < 0 - a, b - сохраняем порядок 
// > 0 - b, a - меняем порядок
operation.sort((a,b) => {
    if(a > b) {
        return 1;
    }

    if(a < b) {
        return -1;
    }    
});
console.log(operation);

const operation2 = [100, -300, -100, 50, 480];
console.log(operation2);

// < 0 - a, b - сохраняем порядок 
// > 0 - b, a - меняем порядок
operation2.sort((a,b) => {
    if(a < b) {
        return 1;
    }

    if(a > b) {
        return -1;
    }    
});
console.log(operation2);