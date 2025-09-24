const users =[
    {
        name: 'Вася',
        surname: 'Пупкин',
        age:30,
        skills:['Разработка','DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills:['Дизайн']
    }

];

console.log(users.map(element=>{
    return { fullname:`${element.name} ${element.surname}`,skillNum: element.skills.length }
}));