class Car {
  constructor() {
    this.brand = [];
  }
  
  set setBrand(value) {
    this.brand.push(value);
  }
  
  get latest() {
    if (this.brand.length < 0) {
      return undefined
    }
    return this.brand[this.brand.length - 1];
  }
}

car = new Car();

car.setBrand = 'BMW'
car.setBrand = 'BENZ'
car.setBrand = 'AUDI'
car.setBrand = 'FERRARI'

console.log(car.brand);

console.log(car.latest)