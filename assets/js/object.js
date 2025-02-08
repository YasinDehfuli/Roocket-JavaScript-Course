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

console.log('is this car sport?', car.details.sport)
console.log('car details ==>', car)
console.log('is this function runs? if runs log logger.', car.logger())