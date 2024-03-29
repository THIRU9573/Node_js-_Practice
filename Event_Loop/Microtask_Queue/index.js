//What is Microtask Queues:
{/*
The microtask queue in Node.js is where promises' callback functions are queued for execution, prioritized over 
other tasks in the event loop.
*/}

//Real time Explanation:
{/*
Sure! Imagine you have a Node.js application that needs to fetch data from an external API using a promise-based 
HTTP request library, like Axios. Here's how the event loop and microtask queue work in this scenario:

1. **Event Loop**: The event loop is responsible for handling asynchronous operations in Node.js. When you make an 
HTTP request using Axios, Node.js initiates the request and continues executing other code without waiting for the 
response.

2. **Microtask Queue**: When the HTTP request completes and a response is received, Axios uses promises to handle 
the asynchronous operation. The callback functions attached to these promises (`.then()` or `.catch()`) are placed 
in the microtask queue for execution.

3. **Real-time Example**: Let's say your Node.js application makes multiple HTTP requests to fetch data from 
different APIs. As each request completes, its corresponding `.then()` callback is added to the microtask queue. 
Even if other tasks are being executed in the event loop, Node.js ensures that these promise callbacks are executed as soon as possible, in the order they were added to the microtask queue.

So, in summary, the microtask queue ensures that promise callbacks are executed in a timely manner, without 
blocking the event loop, allowing for efficient handling of asynchronous operations in Node.js.
*/}

const axios = require('axios');

// Function to fetch data from an API
async function fetchData(apiUrl) {
  try {
    // Making an HTTP GET request using Axios
    const response = await axios.get(apiUrl);
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example API URLs
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Making multiple HTTP requests asynchronously
apiUrls.forEach(apiUrl => {
  fetchData(apiUrl); // Each request initiates asynchronously
});

console.log('Requests initiated.'); // This message will be printed first

// Other synchronous code can go here

// Example of synchronous task
const sum = 1 + 2;
console.log('Sum:', sum); // This message will be printed second
