//What is I/O_Queue:

{/*
In Node.js, an I/O queue manages input and output operations, organizing them for efficient processing 
by the event loop.
*/}

{/*
The I/O queue in Node.js manages input and output operations, ensuring they are processed efficiently by the 
event loop. Here's a step-by-step explanation with a real-time example:

1. **Initialization**: When you perform an I/O operation in Node.js, such as reading from a file or 
making an HTTP request, it is added to the I/O queue.

2. **Non-Blocking Execution**: Node.js uses non-blocking I/O, which means that while the I/O operation is 
being performed, the JavaScript execution continues without waiting for the operation to complete.

3. **Event Loop**: The event loop continuously checks for completed I/O operations. When an operation finishes, 
its corresponding callback function is placed in the callback queue.

4. **Execution**: As the JavaScript runtime loop progresses, it checks the callback queue for completed 
I/O operations. If there are any, it dequeues the callbacks and executes them.

5. **Continuation**: The execution of the callback function resumes with the data obtained from the 
I/O operation or any error encountered during the operation.

Here's a simple example demonstrating how I/O operations work in Node.js:

```javascript
const fs = require('fs');

// Perform an asynchronous file read operation
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('Reading file...'); // This will be printed before file content
```

In this example, `fs.readFile()` initiates a file read operation. The callback function passed to `fs.readFile()` 
is added to the I/O queue. Meanwhile, the `console.log('Reading file...')` statement is executed immediately without waiting for the file read operation to complete.

When the file read operation finishes, its callback function is moved to the callback queue. The event loop 
then dequeues and executes the callback, printing the file content.

This demonstrates how Node.js manages I/O operations asynchronously, allowing the JavaScript execution to 
continue without blocking.
*/}

const fs = require('fs');

// Perform an asynchronous file read operation
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('Reading file...'); // this will run first

