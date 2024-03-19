/*
function greet(name){
    console.log(`Hello ${name}`);
}

function greetVishwas(greetFn){
    const name = "Vishwas";
    greetFn(name);
}

greetVishwas(greet);
*/

function greet(name){
    console.log(`Hello ${name}`);
}

function greetVishwas(callback){
    const name = "Vishwas";
    callback(name);
}

greetVishwas(greet);