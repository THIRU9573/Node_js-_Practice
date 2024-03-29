{/*
The event loop is a crucial concept in Node.js, responsible for handling asynchronous operations and ensuring 
non-blocking behavior, which is essential for building scalable and efficient applications. Here's an explanation
 along with a real-time example:

### What is the Event Loop?

The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite being 

single-threaded. In Node.js, most I/O operations are handled asynchronously to prevent blocking the execution of 
other code while waiting for I/O operations to complete.

### How Does it Work?

1. **Event Loop**: The event loop continuously checks if there are any tasks that need to be executed. It keeps 
track of tasks in different queues.

2. **Event Queue**: Tasks are queued in the event queue when asynchronous operations 
(such as I/O operations or timers) are completed. These tasks are not executed immediately but are instead queued 
for future execution.

3. **Callback Queue**: When asynchronous tasks are completed, their corresponding callbacks are placed in the 
callback queue.

4. **Execution Stack**: The event loop picks up tasks from the callback queue one by one and pushes them onto the 
execution stack for execution. The execution stack is where synchronous code is executed.

5. **Non-blocking**: While waiting for asynchronous operations to complete, Node.js can continue executing other 
code, making the most out of its single-threaded architecture.

### Real-time Example:

Let's consider a simple Node.js server that listens for HTTP requests and responds to them. Here's how the event 
loop works in this scenario:

const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation (e.g., reading from a file)
  setTimeout(() => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  }, 1000); // Simulate a delay of 1 second
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});



In this example:
- When the server receives an HTTP request, it enters the event loop.
- The `createServer` callback is non-blocking, so the event loop continues to check for other tasks.
- Once the asynchronous operation (in this case, the `setTimeout` function simulating a delay) completes, its callback is queued in the event queue.
- The event loop picks up the callback from the event queue and executes it, sending the response to the client.

### Conclusion:
The event loop in Node.js enables efficient handling of asynchronous operations, allowing applications to remain responsive and scalable. Understanding how it works is crucial for building high-performance Node.js applications.
 */}


 // Single line definition:
//  The event loop in Node.js is a mechanism that allows asynchronous operations to be handled efficiently without 
// blocking the execution of other tasks.


 const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation (e.g., reading from a file)
  setTimeout(() => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  }, 1000); // Simulate a delay of 1 second
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
