function PepperoniPizza(options) {
    this.name = "Pepperoni";
    this.cheese = true;
    this.salami = true;
    setOptions(this, options);
}

function VeganPizza(options) {
    this.name = "Vegan";
    this.meat = false;
    this.vegetables = true;
    setOptions(this, options);
}

function setOptions(pizza, options) {
    pizza.size = options.size;
    pizza.deliveryAddress = options.deliveryAddress;
    pizza.extraToppings = options.extraToppings;
}

function PizzaFactory() {}
PizzaFactory.prototype.pizzaClass = undefined;
PizzaFactory.prototype.createPizza = function (name, options) {
    switch (name) {
        case "Pepperoni":
            this.pizzaClass = PepperoniPizza;
            break;
        case "Vegan":
            this.pizzaClass = VeganPizza;
            break;
        default:
            throw Error(`Unsupported pizza name ${name}`);
    }

    return new this.pizzaClass(options);
};

let pizzaFactory = new PizzaFactory();
let vegan = pizzaFactory.createPizza("Vegan", {size: "small", deliveryAddress: "-", "extraToppings": ['cheese', 'ketchup']});
console.log(vegan);

let pepperoni = pizzaFactory.createPizza("Pepperoni", {size: "big", deliveryAddress: "-", "extraToppings": ['meat']});
console.log(pepperoni);