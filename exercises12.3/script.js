const userName = 'Вася aka Terminator Пупкин';
console.log(`Имя: ${userName.split(' ')[0]}, фамилия ${userName.split(' ')[1].toLowerCase() === "aka" ? "нет её" :userName.split(' ')[1]}` );