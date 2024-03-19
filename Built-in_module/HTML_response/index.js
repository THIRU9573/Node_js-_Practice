const http = require("node:http");
const fs = require("node:fs")

/*
//create server

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<h1> Hello Thirupathi </h1>")
})

//create Request:

server.listen(3000, () => {
    console.log("Server running on port 3000")
})
*/

//create server :
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    //fs.createReadStream("./index.html").pipe(res)  //method 1
    fs.createReadStream(__dirname + "/index.html").pipe(res)  // method2
    // const html = fs.readFileSync("./index.html") // read the entire file content at once
    // res.end(html)
})

//create request:
server.listen(3000, () => {
    console.log("Server running on port 3000")
})