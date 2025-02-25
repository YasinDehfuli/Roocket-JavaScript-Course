const list = [1, 2, 3, 4, 5]
const name = 'yasin'
const obj = {name: 'John', age: 3};


for (const x of list) {
  console.log(x)
}

for (const y of name) {
  console.log(y)
}

// it is not iterable because of being objected
for (const z of obj) {
  console.log(z)
}