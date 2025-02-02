let hello = function() {
    return "Hello World";
};

console.log(hello());

hello = () => {
    return "Hello KAWABANGA";
};

console.log(hello());

hello = () => "Hello KATSUDON";

console.log(hello());

hello = (val=38) => `Hello ${val}`;

console.log(hello());
console.log(hello("NOZAKI"));

hello = val => `Hello ${val}`;
console.log(hello("YAMAZAKI"));

hello = (val=true) => `${this}`;
console.log(hello());

class Header {
    constructor() {
        this.color = "Red";
    }

    changeColor = function() {
        console.log(this);
    }
}

const header = new Header();
header.changeColor();

hello = () => {
    const _call = () => {console.log("call")};
    const _test = () => {console.log("test")};
    const get = () => {console.log(this)};
    return {
        "get": get
    };
};

hello().get();