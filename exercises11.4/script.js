const price = [[100,200],[120,100],[200,350]];

console.log(price.map(item => item[1]-item[0])
    .filter(item => item > 0 ));
    