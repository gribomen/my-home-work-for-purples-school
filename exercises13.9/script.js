const user = {
    name: 'Вася',
    age: 40,
    city: 'Moscow'
};

const {age,name, ...userWithouAge} = user; 
console.log(age);
console.log(name);
console.log(userWithouAge);

const additionalData = {
    skills:['Разработка','Дизайн'],
    creditCard: '2342-2345-2734-2356'
}
user.test = 'sdfs'

// user = {
//     ...user,
//     ...additionalData
// }
console.log(user);