/*
The HTTP module in JavaScript allows you to make requests to web servers to fetch or send data. It's like a messenger between your code and the web server. With this module, you can ask for information from other websites or send data to them.

Here's a simple breakdown of how it works:

1. Creating a Request: You start by creating a request object with all the necessary information, like the URL of the server you want to communicate with and the type of request (GET, POST, etc.).

2. Sending the Request: Once you have your request ready, you send it using functions like `fetch()` or `XMLHttpRequest()`. These functions handle the actual sending of the request to the server.

3. Receiving a Response: After the server processes your request, it sends back a response. You can then read this response in your code to see what the server said. This might be the data you requested, or it could be an acknowledgment of the data you sent.

4. Handling the Response: Finally, you handle the response in your code. You might display the data on a webpage, save it to a database, or use it for some other purpose.

Overall, the HTTP module allows your JavaScript code to interact with web servers, enabling powerful communication and data exchange over the internet.

*/


// Import the HTTP module from Node.js standard library
const http = require("node:http");

// Create an HTTP server
const server = http.createServer( (request, response) => {
    // This function gets called whenever a request is made to the server

    // Set the response header with status code 200 (OK)
    response.writeHead(200, {"Content-Type": "text/plain"} );
    
    // Send the response body with "Hello world"
    response.end("Hello Thirupathi!  How are You");
});

// Start the server and make it listen on port 3000
server.listen(3000, () => {
    // This callback function gets executed when the server starts listening

    // Log a message to the console indicating that the server is running
    console.log("Server running on port 3000");
});
