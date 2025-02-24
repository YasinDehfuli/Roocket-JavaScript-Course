function Car(brand, model, color, age) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.age = age;
}

Object.prototype.parentProto = function () {
  return 'Parent Proto';
}

Car.prototype.set = function () {
  return 'set'
}

let car1 = new Car('bmw', 'e46', 'red', '2006');

let car2 = new Car('benz', 'e220', 'white', '2016');

console.log(car1);
console.log(car2);

let car3 = Object.create(car1);
car3.brand = 'audi'
car3.model = 'tt'
car3.age = '2010'
car3.makeSmile = function () {
  console.log(':)')
}
console.log(car3);

let car4 = Object.create(car3);
car4.color = 'red'
car4.test = 'case'
car4.rings = 'sport'

console.log(car4);

let car5 = Object.create(car4);

console.log(car5)