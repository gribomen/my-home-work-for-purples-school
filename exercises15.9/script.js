const company = {
    name: 'ООО Агро',
    
    employees: [
        {
            name: 'Света',
        }
    ],

    ceo: {
        name: 'Вася',
    },

    getCompanyName: function(){
        return this.name;
    },

    getCompanyEmployees: function(){
        return this.employees.map(item => item.name);
    },

    getCompanyCEO: function(){
        return this.ceo.name;
    }

}

console.log(company.getCompanyName());
console.log(company.getCompanyEmployees());
console.log(company.getCompanyCEO());
