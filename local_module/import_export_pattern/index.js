/*
const add = require("./maths");

console.log(add(20,40));
*/

/*
const math = require('./maths');

console.log(math.add(40,50));
console.log(math.subtract(40,50));
*/


const math = require('./maths');

const {add, subtract} = math  //destructuring method

console.log(add(40,50));
console.log(subtract(40,50));