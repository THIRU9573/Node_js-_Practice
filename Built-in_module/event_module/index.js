const EventEmitter = require("node:events");

const emitter = new EventEmitter()

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order Received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order_pizza", (size) => {
    if (size === "large") {
        console.log("serving complimentary drink");
    }
});

console.log("Do work before occur in the system");
emitter.emit("order-pizza", "large", "mushrooms")