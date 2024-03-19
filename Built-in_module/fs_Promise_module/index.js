const { error } = require("node:console");
const fs = require("node:fs/promises")
const path = require("path")


const filePath = path.join("../fs_module/file.txt")

async function readFile() {
    try {
        const data =  await fs.readFile(filePath, "utf-8")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

readFile();


/*
console.log("First")
fs.readFile(filePath, "utf-8")
.then((data) => console.log(data))  //.then() is called on a promise and takes a callback function as an argument. This function will be executed if the promise is resolved successfully, with the resolved value passed as an argument to the function.
.catch((error) => console.log(error)); //.catch() is also called on a promise and takes a callback function as an argument. This function will be executed if there's an error during the promise execution or if the promise is explicitly rejected. The error will be passed as an argument to the function.

console.log("Second")
*/