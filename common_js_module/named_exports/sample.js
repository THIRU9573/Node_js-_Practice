
//exporting a variable while defining:
/* we cannot export boolean, number, string, null, objects, and arrays */
/* module.exports.value = let value = 5; 
 exports.studentName = let studentName = 'Rahul'; */



//Exporting a multiple variables after defining:
// sample.js
let value = 5;
let studentName1 = "thirupathi";
exports.value = value;
exports.studentName1 = studentName1;



//Exporting a multiple values or an expressions:
/* we can exportING a value or an expression directly */

let a = 5;
exports.sum =  2+3
exports.sub = 2-a;



//exporting a multiple functions while defining 
/* we can export a multiple functions while defining */
exports.add = function (num1, num2){
    return num1+num2;
};
exports.sub1 = function (num1, num2){
    return num1-num2;
};



//exporting multiple functions after defining:
/*we can export multiple functions after defining */
function add1 (num1, num2){
    return num1+num2;
};
function sub2 (num1, num2){
    return num1-num2;
};
exports.add1 = add1;
exports.sub2 = sub2;




//Exporting multiple classes while defining:
/* we can export a class while defining */
exports.studentDetails = class StudentDetails {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
};
exports.carDetails = class CarDetails{
    constructor(name, millage){
        this.name = name;
        this.millage = millage;
    }
};


//Exporting a class after defining:
/*we can export a class after defining */
class StudentDetails1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
exports.studentDetails1 = StudentDetails1;

class CarDetails1 {
    constructor(name, millage){
        this.name = name;
        this.millage = millage;
    }
};
exports.carDetails1 = CarDetails1;





