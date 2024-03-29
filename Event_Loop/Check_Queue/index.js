//What is Check Queue:

{/* 
In Node.js, a check queue is a place where asynchronous tasks are queued up to be executed after the current 
operation completes, ensuring they run in a predictable order.
*/}

{/*
In Node.js, a "check queue" is a part of the event loop mechanism used for executing certain types of asynchronous
 operations. Let's break it down step by step with a real-time example:

1. **Understanding the Event Loop**: In Node.js, the event loop is a crucial concept for handling asynchronous 
operations efficiently. It allows Node.js to perform non-blocking I/O operations, making it highly scalable.

2. **Event Loop Phases**: The event loop in Node.js consists of several phases, including timers, I/O callbacks, 
idle, prepare, poll, check, and close callbacks.

3. **Check Queue**: The "check" phase in the event loop is where callbacks of `setImmediate()` are executed. 
The `setImmediate()` function is used to schedule a callback to be executed immediately after the current event loop cycle completes.

4. **Step-by-Step Explanation**:

   - **Step 1**: Suppose you have a Node.js application that needs to perform some asynchronous tasks, such as
    reading a file from the disk or making an HTTP request.
   
   - **Step 2**: You schedule a callback using `setImmediate()` to execute some code asynchronously.
   
   - **Step 3**: When the current cycle of the event loop completes all its phases (timers, I/O callbacks, etc.), 
   it moves to the "check" phase.
   
   - **Step 4**: In the "check" phase, the event loop checks if there are any callbacks scheduled using 
   `setImmediate()`.
   
   - **Step 5**: If there are callbacks in the check queue, they are executed one by one, in the order they were 
   added.
   
   - **Step 6**: After executing all the callbacks in the check queue, the event loop may move to the next phases 
   based on other pending tasks.
   
5. **Real-Time Example**:

   Let's consider a simple example where you have a Node.js server that needs to perform some tasks after 
   handling an HTTP request:

   ```javascript
   const http = require('http');
   
   const server = http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello World\n');
   
       // Schedule a callback to be executed immediately after the current cycle
       setImmediate(() => {
           console.log('Callback executed after HTTP response');
       });
   });
   
   server.listen(3000, '127.0.0.1', () => {
       console.log('Server running at http://127.0.0.1:3000/');
   });
   ```

   In this example, when a request is received by the server, it sends back a "Hello World" response and 
   schedules a callback using `setImmediate()` to log a message. This callback will be executed in the "check" 
   phase of the event loop after handling the HTTP response.

This example demonstrates how the "check queue" in Node.js allows you to execute callbacks asynchronously 
after the current cycle of the event loop completes.
*/}

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

    // Schedule a callback to be executed immediately after the current cycle
    setImmediate(() => {
        console.log('Callback executed after HTTP response');
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
