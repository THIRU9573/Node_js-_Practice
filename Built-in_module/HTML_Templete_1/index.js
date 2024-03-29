// const http = require("node:http");
// const fs = require("node:fs");

// //create Server:
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type":"text/html"})
//     const html = fs.readFileSync("./index.html", "utf-8")
//     res.end(html)
// });

// //Create request:
// server.listen(3000, () => {
//     console.log("Server running on port 3000")
// })

const http = require("http");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {
    // Serve HTML file
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { "Content-Type": "text/html" });
        const html = fs.readFileSync("./index.html", "utf-8");
        res.end(html);
    } 
    // Serve CSS file
    else if (req.url === '/style.css') {
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync("./style.css", "utf-8");
        res.end(css);
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
