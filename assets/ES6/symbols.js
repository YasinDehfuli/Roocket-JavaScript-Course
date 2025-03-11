const symbol1 = Symbol('description')
const symbol2 = Symbol.for('key')

const obj = {
  name: 'john',
  [symbol1]: 22,
  [symbol2]: 44
}

console.log(obj)

const symbolX = Symbol.for('key')


console.log(obj[symbolX])