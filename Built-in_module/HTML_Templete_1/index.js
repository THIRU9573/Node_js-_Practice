const http = require("node:http");
const fs = require("node:fs");

//create Server:
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"})
    const html = fs.readFileSync("./index.html", "utf-8")
    res.end(html)
});

//Create request:
server.listen(3000, () => {
    console.log("Server running on port 3000")
})