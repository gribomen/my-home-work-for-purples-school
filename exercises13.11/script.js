const warehouse = {
    goods:[],
    findGoodById: function(id) {
        return this.goods.find(g => g.id === id)
    },
    addGood: function(product) {
        const existedGood = this.findGoodById(product.id)
        if(existedGood){
            console.log('Этот товар уже есть на складе')
            return; 
        }
        this.goods.push(product)
    },
    getWeightKg: function() {
        return this.goods.reduce((acc,item)=> acc+= item.weight?.kg ? item.weight.kg : 0,0);
    }
}

/* Товары */
const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
    kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());