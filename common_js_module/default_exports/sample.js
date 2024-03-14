
//exporting a variable while defining:
/* we cannot export boolean, number, string, null, objects, and arrays */
/* module.exports = let value = 5; */



//Exporting a variable after defining:
let value = 5;
module.exports = value;


//Exporting a value or an expression:
/* we can exportING a value or an expression directly */
module.exports = 5*3;



//exporting a function while defining 
/* we can export a function while defining */
module.exports = function (num1, num2) {
    return num1+num2;
}



//exporting a function after defining:
/*we can export a function after defining */
function sum1(num3, num4) {
    return num3+num4;
} 
module.exports = sum1;



//Exporting class while defining:
/* we can export a class while defining */
module.exports = class StudentDetails {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};


//Exporting a class after defining:
/*we can export a class after defining */
class StudentDetails1 {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
        
    }
};
module.exports = StudentDetails1;





