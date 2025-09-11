const price = [[100,200],[120,100],[200,350]];

console.log(price.filter(item => (item[1]-item[0]) > 0 )
    .map(item => (item[1]-item[0])));