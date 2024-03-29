{/*
Network I/O (Input/Output) in Node.js refers to the capability of Node.js to handle network-related operations, 
such as creating servers, making HTTP requests, and interacting with sockets. Node.js provides a powerful set of 
modules and APIs for network I/O, making it well-suited for building networked applications like web servers, 
APIs, real-time communication systems, and more. Here are some key aspects of network I/O in Node.js:
*/}

const https = require("node:https");

const MAX_CALLS = 6;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.co.in/", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Request:${i+1}`, Date.now() - start)
        });
    })
    .end()
}