const fs = require("node:fs");


console.log("First")
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

console.log("Second");
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error);
    }else {
        console.log(data)
    }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello World");


fs.writeFile("./greet.txt", " Hello Thirupathi", {flag : "a"}, (err) =>{   //here Hello world override with Hello thirupathi, if you don't want override old text. write append {flag:"a"} as argument
    if(err){
        console.log(err);
    }else{ 
        console.log("File WRitten")
    }
})