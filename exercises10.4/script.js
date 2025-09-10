const power = pow => num => num**pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(10));
console.log(powerOfTwo(6));

const powerOfThree = power(3);
console.log(powerOfTwo(5));
console.log(powerOfTwo(6));

console.log(power(4)(5));