//method1
/*
const calculator  = require('./calculator1');
const {add, sub} =  calculator;

*/

//method2

const  {add, sub} = require('./calculator1')

console.log(add(10,4))
console.log(sub(5,3))