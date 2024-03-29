const http = require("node:http");
const fs = require("node:fs");


//Create Server:
const server = http.createServer((req, res) => {

    //req.method GET POST PUT DELETE we can do.
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Home page")
    }else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("About Page")
    } else if (req.url === "/api") {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify({
            firstName:"Thirupathi",
            lastName:"Erra"
        })
        );
    } else {
        res.writeHead(404);
        res.end("Page not found");
    }
});


server.listen (3000, () => {
    console.log("Server running on port 3000")
})