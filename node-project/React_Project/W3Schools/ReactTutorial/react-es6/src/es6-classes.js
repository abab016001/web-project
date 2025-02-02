class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return `I have a ${this.brand}`;
    }
}

const mycar = new Car("Ford");
console.log(mycar.present());

class Model extends Car {
    constructor(name, mode) {
        super(name);
        this.mode = mode;
    }
    show() {
        return `${this.present()}, it is a ${this.mode}`;
    }
}

const mycar2 = new Model("Ford", "Mustang");
console.log(mycar2.show());
// --
class Animal {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return `${this.name} ~~~`;
    }
}

class MyPet extends Animal {
    constructor(pet) {
        super(pet);
        this.pet = pet;
    }
    voice() {
        return `我的寵物${this.pet}: ${super.voice()}`;
    }
}

const myPet = new MyPet("傑尼龜");
console.log(myPet.voice());

