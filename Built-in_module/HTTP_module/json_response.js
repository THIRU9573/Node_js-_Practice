const http = require("node:http");

//create a server:
const server = http.createServer( (request, response) => {
    //create javascript object:
    const superHero = {
        firstName:"Thirupathi",
        lastName:"Erra",
    }

    response.writeHead(200, {"Content-Type": "application/json"} );
    response.end(JSON.stringify(superHero)) //convert JSON format and sent to body as response
});

//create request:
server.listen(3000, () => {
    console.log("Server running on port 3000")
})