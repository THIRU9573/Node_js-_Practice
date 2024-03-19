/* practice1:
const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();

pizzaShop.order();
pizzaShop.displayOrderNumber();
*/

const PizzaShop = require('./pizza-shop');
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size,topping) => {
    console.log(`Order received! Baking ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();