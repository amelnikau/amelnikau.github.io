let depo = (function () {
    let stock = {};
    return {
        addItem: function(name, quantity) {
            if (stock[name]) {
                stock[name] = stock[name] + quantity;
            } else {
                stock[name] = quantity;
            }
            console.log(`Added ${quantity} of ${name}`);
        },

        getItemQuantity: function(name) {
            console.log(`Quantity of ${name} is ${stock[name] ? stock[name] : 0}`);
        },

        removeItem: function (name, quantity) {
            if (!stock[name] || stock[name] < quantity) {
                console.log(`Cannot remove ${quantity} of ${name}`);
            } else {
                stock[name] = stock[name] - quantity;
            }
            console.log(`Removed ${quantity} of ${name}`);
        }
    }
})();

let depoCommandExecutor = {
    execute : function (command, ...args) {
        if (depo[command]) {
            return depo[command](...args);
        }
    }
};

depoCommandExecutor.execute("addItem", "bat", 3);
depoCommandExecutor.execute("addItem", "PS4", 2);
depoCommandExecutor.execute("getItemQuantity", "PS4");
depoCommandExecutor.execute("removeItem", "PS4", 1);
depoCommandExecutor.execute("getItemQuantity", "PS4");