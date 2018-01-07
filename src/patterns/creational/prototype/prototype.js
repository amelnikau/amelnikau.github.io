let vehiclePrototype = {
    init: function (model) {
        this.model = model;
    },

    getModel: function () {
        return `Car model is ${this.model}`;
    }
};

function vehicle(model) {
    function F() {}
    F.prototype = vehiclePrototype;
    let f = new F();
    f.init(model);
    return f;
}

let ford = vehicle("Ford");
console.log(ford.getModel());

let mazda = vehicle("Mazda");
console.log(mazda.getModel());