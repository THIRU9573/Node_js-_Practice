// Example function with a callback
function fetchData(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a database)
    setTimeout(() => {
        const data = "This is some data";
        // Once the operation is completed, invoke the callback function with the data
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

// Callback function to handle the fetched data
function handleData(data) {
    console.log("Received data:", data);
}

// Call the function with the callback
fetchData(handleData);
console.log("Fetching data..."); // This will be printed before the data is received
