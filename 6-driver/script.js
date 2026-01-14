const hasLicence = true;
const age = 28;
const isDrunk = true;
const result = hasLicence && !isDrunk && age > 18;
console.log(`Пользователь ${result ? "может":"не может"} ехать`);