let car = {
  brand: 'bmw',
  model: 'e46',
  color: 'black',
  age: '2006',
  details: {
    name: 'lucifer',
    sport: true,
  },
  
  logger() {
    return 'i love my, ' + this.brand + ' ' + this.model + ' car.'
  }
}

let car2 = new Object()
car2.brand = 'benz'
car2.model = 'e200'
car2.color = 'white'
car2.age = '2012'

console.log('is this car sport?', car.details.sport)
console.log('car details ==>', car)
console.log('is this function runs? if runs log logger.', car.logger())

console.log('car2 object details',car2)