//Module.exports vs exports:
/*
const obj1 = {
    name: "Bruce Wayne"
}

const obj2 = obj1;
obj2.name = "Henry Cavil"

console.log(obj1)
*/

const obj1 = {
    name: "Bruce Wayne"
}

let obj2 = obj1;
obj2 = {
    name : "Henry Cavil",
};

console.log(obj1)