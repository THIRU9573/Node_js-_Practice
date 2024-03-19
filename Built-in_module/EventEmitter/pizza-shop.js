/*
class PizzaShop {
    constructor(){
        this.orderNumber = 0;
    }

    order() {
        this.orderNumber++
    }

    displayOrderNumber(){
        console.log(`the current order number ${this.orderNumber}`)
    }
}

module.exports =  PizzaShop;
*/

const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor(){
        super()
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping)
    }

    displayOrderNumber(){
        console.log(`the current order number is ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;