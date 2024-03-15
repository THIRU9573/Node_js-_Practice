//Module Wrapper:
/* 
-> Every module in node.js get wrapped in an IIFE before being loaded.
-> IIFE help keep top level variables scoped to the module rather than the global object.
-> the IIFE Thats wraps every module contains 5 parameter which are pretty important for the functioning of a module 
*/

(function(message){
    const superHero = "superman"
    console.log(message, superHero)
})("Hello");

(function(message){
    const superHero = "batman"
    console.log(message, superHero)
})("How are you");
