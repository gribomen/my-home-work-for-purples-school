const price = [[2,4],[3,4],[10,[20,50]]];
const res = price.flat(2);
const res2 = price.flatMap(el => el.concat([1]));
console.log(res);
console.log(res2);