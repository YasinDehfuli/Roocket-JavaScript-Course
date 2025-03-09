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

class IranCar extends Car {
  constructor(brand, model, name, price, rating) {
    super(brand, model, name);
    this.price = price;
    this.rating = rating;
  }
}

const prideCar = new IranCar('Siapa', '111', 'Pride', '44Mil', '1/10');

console.log('pride card details ==>', prideCar);


class motorCycle extends Car {
  constructor(brand, model, name, topSpeed, wheels) {
    super(brand,model,name);
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }
  
  speed() {
    console.log('top to 300km')
  }
}

const xsr155 = new motorCycle('Yamaha','XSR155','-','180km','2')

console.log('motorCycle details ==>',xsr155);

