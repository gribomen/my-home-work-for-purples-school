const users = ['Аня','Вика','Катя'];
console.log(users);
users[2]='Кристина';
console.log(users);

let arrLenght = users.push('Никита');
console.log(users);
console.log(arrLenght);

arrLenght = users.unshift('Вася');
console.log(users);
console.log(arrLenght);