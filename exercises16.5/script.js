'use strict'
//IIFE

function init() {
    console.log('Start');
}

init();
init();

(function(){
    console.log('Start IIFO')
    const a = 5;
})();

console.log(a);