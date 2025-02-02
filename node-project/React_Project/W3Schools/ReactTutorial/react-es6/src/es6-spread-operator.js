const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log({one, two, rest});

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};

const updateMyVehicle = {
    type: 'car', 
    year: '2021',
    color: 'yellow'
};

const myUpdateVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdateVehicle);