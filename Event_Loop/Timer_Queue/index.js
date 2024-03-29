//what is timer Queue:
{/*
In Node.js, a timer queue is a mechanism that manages the execution of code at specified times or after certain
 delays.
*/}

{/*

1. **Setting up the timer queue**: When you use functions like `setTimeout()` or `setInterval()` in Node.js, they 
internally leverage the timer queue mechanism. When you call these functions, Node.js schedules the code 
you provide to run after a specified delay (in the case of `setTimeout()`) or at regular intervals 
(in the case of `setInterval()`).

2. **Adding tasks to the queue**: When you call `setTimeout()` with a callback function and a specified delay, 
Node.js adds this task to the timer queue. Similarly, when you call `setInterval()`, Node.js adds the specified 
task to the timer queue to execute at regular intervals.

3. **Execution of tasks**: As time progresses, Node.js continuously monitors the timer queue. When the specified 
delay for a task expires (in the case of `setTimeout()`) or when it's time to execute the task again 
(in the case of `setInterval()`), Node.js moves the corresponding task from the timer queue to the execution 
queue, where it will be executed by the event loop.

Here's an example code demonstrating the usage of `setTimeout()` and `setInterval()`:

```javascript
// Using setTimeout
console.log("Start of the program");

setTimeout(() => {
    console.log("This code will run after 2 seconds.");
}, 2000);

console.log("End of the program");

// Using setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 iterations
    }
}, 1000);
```

In this code:

- We first print "Start of the program".
- Then, we set a timeout for 2 seconds using `setTimeout()`. After 2 seconds, the provided callback function 
will execute, printing "This code will run after 2 seconds."
- "End of the program" is printed immediately after `setTimeout()` without waiting for the timeout to expire. 
This demonstrates the asynchronous nature of `setTimeout()`.
- Next, we set an interval using `setInterval()`. This interval will print "Interval X" every second, 
incrementing X by 1 each time. After 5 iterations, the interval is stopped using `clearInterval()`.

This example illustrates how tasks are added to and executed from the timer queue in Node.js.
*/}

// Using setTimeout
console.log("Start of the program");

setTimeout(() => {
    console.log("This code will run after 2 seconds.");
}, 2000);

console.log("End of the program");

// Using setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 iterations
    }
}, 1000);
