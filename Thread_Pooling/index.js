{/* 
libuv is a multi-platform support library primarily developed for Node.js to handle asynchronous I/O operations in a non-blocking manner. It provides event loop, networking, and asynchronous I/O support across different operating systems. Here's a brief overview of libuv:

1. **Event Loop**: libuv abstracts the event loop implementation, which is crucial for handling I/O operations asynchronously in Node.js. It allows Node.js to perform I/O operations without blocking the execution of other tasks.

2. **Cross-Platform Compatibility**: libuv is designed to be cross-platform, meaning it provides consistent behavior and APIs across different operating systems such as Linux, macOS, and Windows. This ensures that Node.js applications built using libuv can run seamlessly on various platforms.

3. **Asynchronous I/O Operations**: libuv provides APIs for performing asynchronous I/O operations like file I/O, networking (TCP/UDP), and asynchronous DNS resolution. These operations are essential for building scalable and high-performance network applications.

4. **Thread Pool**: libuv includes a thread pool that can be utilized by Node.js for executing blocking or CPU-intensive tasks asynchronously. This allows Node.js to handle CPU-bound operations without blocking the event loop, improving overall application responsiveness.

5. **Handles and Requests**: libuv abstracts various operating system concepts such as file descriptors, sockets, and timers into handles and requests. These abstractions simplify the interaction with underlying operating system resources and provide a unified interface for managing different types of I/O operations.

  */}

//Thread Pooling:

// Thread pooling is a technique used in concurrent programming to manage a pool of worker threads. 
// Instead of creating a new thread for each task, a pool of threads is pre-created and maintained.
// When a task needs to be executed, it's submitted to the thread pool, and one of the idle threads from the pool 
// picks up the task and executes it. This approach minimizes the overhead of creating and destroying threads for 
// each task, thus improving performance and resource utilization.



//Experiment1:

// const crypto = require("node:crypto");

// const start = Date.now()
// crypto.pbkdf2Sync ("password", "salt", 100000,512, "sha512");
// crypto.pbkdf2Sync ("password", "salt", 100000,512, "sha512");
// crypto.pbkdf2Sync ("password", "salt", 100000,512, "sha512");
// console.log("Hash: ", Date.now() - start);

//Experiment2:

// const crypto = require("node:crypto");

// const MAX_CALLS = 2;
// const start = Date.now();

// for (let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log("Hash: ${i+1}", Date.now() - start)
//     });
// }


//Experiment3:

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5;

// const start = Date.now();

// for (let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start)
//     });
// }


{/* By increasing the thread pool size, we are able to improve the total time taken to run multiple calls of an 
asynchronous method like pbkdf2 */}

//Experiment 4:

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 8;
// const MAX_CALLS = 8;

// const start = Date.now();

// for (let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start)
//     });
// }



// Experiment 5:
{/* Increasing the thread pool size can help with performance but that is limited by the number of 
available CPU cores */}

const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 16;

const start = Date.now();

for (let i = 0; i< MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i+1}`, Date.now() - start)
    });
}












