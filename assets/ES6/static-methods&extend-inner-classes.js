class Car {
  constructor(brand, model, name) {
    this.brand = brand;
    this.model = model;
    this.name = name;
  }
  
  static speed() {
    return 'up to 120km'
  }
}

// const car = new Car() ⬇️ ;
// create an object without create new object
console.log(Car.speed())


// extend internal javascript classes

class AdvanceArray extends Array{
  find(value){
    let val = this.filter(item => item.value === value);
    return val.length === 0 ? 'error' : val[0];
  }
}

const list = new AdvanceArray('ali', 'reza','mohammad');
console.log(list.find('ali'));

