//what si Close Queue:

{/*
In Node.js, a "close" event typically refers to the event emitted when a resource
 (such as a server, socket, or file stream) is about to be closed. It allows you to perform cleanup tasks or 
 handle any necessary operations before the resource is fully closed.

Let's break down the concept step by step with a real-time example:

Step 1: Setting up a Server
```javascript
const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, we create a basic HTTP server using Node.js's built-in `http` module. The server responds 
with "Hello World" for any incoming HTTP requests.

Step 2: Handling the Close Event
```javascript
// Handle the 'close' event on the server
server.on('close', () => {
  console.log('Server is about to close');
});
```

Here, we're setting up a listener for the 'close' event on the server object. This event will be 
triggered just before the server is closed.

Step 3: Triggering the Close Event
```javascript
// Close the server after 10 seconds
setTimeout(() => {
  server.close();
}, 10000);
```

In this step, we're scheduling the server to close after 10 seconds using `setTimeout()`. 
When the server is closed, it will emit the 'close' event, triggering the handler we set up in Step 2.

Step 4: Full Example
Putting it all together:

```javascript
const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Handle the 'close' event on the server
server.on('close', () => {
  console.log('Server is about to close');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Close the server after 10 seconds
setTimeout(() => {
  server.close();
}, 10000);
```

This example demonstrates how to use the 'close' event in Node.js to perform cleanup tasks or any other 
necessary operations before a server or other resource is closed.
*/}

const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Handle the 'close' event on the server
server.on('close', () => {
  console.log('Server is about to close');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Close the server after 10 seconds
setTimeout(() => {
  server.close();
}, 10000);
