const wallet = {
    balance: 0,
    operations: [],
    increase: function(sum, reason){
        this.balance += sum;
        this.operations.push({reason,sum});
        return true;
    },
    decrease : function(sum, reason){
        if( this.balance - sum < 0 || sum < 0){
            console.log('Недостаточно средств в кошельке')
            return false;
        }
        this.balance -= sum;
        this.operations.push({reason,sum: -sum});
        return true;
    },
    getOperationLength: function(){ 
        return this.operations.length
    }
}

wallet.increase(10,"Подарок на 23 февраля");
console.log(wallet);