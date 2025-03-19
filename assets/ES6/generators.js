function* generator(){
  console.log('yield 1')
  yield 10
  console.log('yield 2')
  yield 20
  console.log('yield 3')
  yield 30
  
  console.log('finish')
}

const generatorStep = generator()

console.log(generatorStep.next())
console.log(generatorStep.next())
console.log(generatorStep.next())
console.log(generatorStep.next())