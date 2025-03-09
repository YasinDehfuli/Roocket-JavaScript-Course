class Car {
  constructor(brand, model, name) {
    this.brand = brand;
    this.model = model;
    this.name = name;
  }
  
  speed() {
    return 'up to 120km'
  }
}

const car1 = new Car('BMW', '2012', 'E46');


console.log(car1);
console.log(car1.speed());


const car2 = new Car('BENZ', '2020', 'G-Class');

console.log(car2);
console.log(car2.speed())