function Car(brand, model, color, age) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.age = age;
}

let car1 = new Car('bmw', 'e46', 'red', '2006');

let car2 = new Car('benz', 'e220', 'white', '2016');

console.log(car1);
console.log(car2);