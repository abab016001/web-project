const vehicles = ["mustang", "f-150", "expedition"];
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log({car, truck, suv});

const [_car, _truck, _suv] = vehicles;
console.log({_car, _truck, _suv});

const [__car, , __suv] = vehicles;
console.log({__car, __suv});

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
console.log({add, subtract, multiply, divide});

const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: "2021",
    color: "red",
    registration: {
        city: "Houston",
        state: "Texas",
        country: "USA"
    }
};

function myVehicle(vehicleOne) {
    const message = 'My ' + vehicleOne.type + " is a " + vehicleOne.color + " " + vehicleOne.brand + " " + vehicleOne.model + ".";
    console.log(message);
}

myVehicle(vehicleOne);

function myVehicle2({type, color, brand, model}) {
    const message = 'My ' + type + " is a " + color + " " + brand + " " + model + ".";
    console.log(message);
}

myVehicle2(vehicleOne);

function myVehicle3({model, registration: {state}}) {
    const message = "My " + model + " is registered in " + state + ".";
    console.log(message);
}

myVehicle3(vehicleOne);