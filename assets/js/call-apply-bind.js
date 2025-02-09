'use strict'

let car = {
  year: '1999',
  brand: 'BMW',
  model: 'accord',
  changer: function (newYear, newBrand) {
    console.log('My Car is : ' + this.brand + ' model : ' + this.model + ' And i want to change it to ' + newYear + ' ' + newBrand)
  }
}

let car2 = {
  model: '1999',
  brand: 'honda',
}

function displayDetails(brand, model) {
  console.log('My Car is : ' + this.brand + ' model : ' + this.model + ' And i want to change it to ' + brand + ' ' + model)
}

// apply
displayDetails.apply(car, ['benz', 2012])

// call
displayDetails.call(car, 'bmw', 2006)

//
displayDetails.bind(car, 'toyota', 2012)()

car.changer.apply(car2, ['benz', 1999])